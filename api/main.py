"""
FastAPI Bridge - api/main.py
Central FastAPI application. Wraps src/ functions into RESTful endpoints.
"""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI, Depends, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

from api.database import get_db
from api.auth_utils import (
    create_access_token, get_current_user,
    require_organizer_or_admin, require_admin
)
import src.auth as auth_module
import src.crud as crud

# ─── App ─────────────────────────────────────────────────────────────────────

app = FastAPI(
    title="Event Management API",
    description="FastAPI bridge over the Python event management backend",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Pydantic Schemas ─────────────────────────────────────────────────────────

class LoginRequest(BaseModel):
    username: str
    password: str

class RegisterRequest(BaseModel):
    username: str
    password: str
    name: str
    email: str
    phone: str

class CreateEventRequest(BaseModel):
    name: str
    start_datetime: str
    end_datetime: str
    venue_id: int
    org_id: int
    category_ids: List[int]
    price: float

class UpdateEventRequest(BaseModel):
    name: str
    start_datetime: str
    end_datetime: str
    venue_id: int
    org_id: int
    category_ids: List[int]
    price: float

class CreateBookingRequest(BaseModel):
    event_id: int

class CheckinRequest(BaseModel):
    registration_id: int

class UpdateFinanceRequest(BaseModel):
    finance_id: int
    planned_budget: float
    actual_cost: float

# ─── Helper ───────────────────────────────────────────────────────────────────

def df_to_list(df) -> list:
    """Convert a pandas DataFrame to a list of dicts with safe serialization."""
    if df is None or df.empty:
        return []
    df = df.fillna("")
    records = df.to_dict(orient="records")
    # Convert categories string to list for all records
    for r in records:
        if "categories" in r and isinstance(r["categories"], str):
            r["categories"] = [c.strip() for c in r["categories"].split(",") if c.strip()]
        # Convert datetime objects to strings
        for k, v in r.items():
            if hasattr(v, "isoformat"):
                r[k] = v.isoformat()
    return records

# ─── Auth Endpoints ───────────────────────────────────────────────────────────

@app.post("/api/auth/login")
def login(req: LoginRequest, db=Depends(get_db)):
    user_data = auth_module.authenticate_user(db, req.username, req.password)
    if not user_data:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    token_payload = {
        "user_id": user_data["user_id"],
        "username": req.username,
        "name": user_data.get("name") or req.username,
        "email": user_data.get("email") or "",
        "role": user_data["role"],
        "guest_id": user_data.get("guest_id"),
        "permissions": user_data.get("permissions", []),
    }
    token = create_access_token(token_payload)
    return {"access_token": token, "token_type": "bearer", "user": token_payload}


@app.post("/api/auth/register", status_code=201)
def register(req: RegisterRequest, db=Depends(get_db)):
    success, message = auth_module.register_new_guest_user(
        db, req.username, req.password, req.name, req.email, req.phone
    )
    if not success:
        if "already exists" in message:
            raise HTTPException(status_code=409, detail=message)
        raise HTTPException(status_code=400, detail=message)
    return {"message": message}

# ─── Events Endpoints ─────────────────────────────────────────────────────────

@app.get("/api/events")
def get_events(
    search: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    date_from: Optional[str] = Query(None),
    date_to: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    db=Depends(get_db),
):
    df = crud.get_all_events(db)
    if df.empty:
        return []
    # Post-filter in Python
    if search:
        mask = (
            df["event_name"].str.contains(search, case=False, na=False) |
            df["venue_name"].str.contains(search, case=False, na=False)
        )
        df = df[mask]
    if category:
        df = df[df["categories"].str.contains(category, case=False, na=False)]
    if date_from:
        df = df[df["event_date"] >= date_from]
    if date_to:
        df = df[df["event_date"] <= date_to]
    if min_price is not None:
        df = df[df["base_price"] >= min_price]
    if max_price is not None:
        df = df[df["base_price"] <= max_price]
    return df_to_list(df)


@app.get("/api/events/{event_id}")
def get_event(event_id: int, db=Depends(get_db)):
    df = crud.get_event_by_id(db, event_id)
    result = df_to_list(df)
    if not result:
        raise HTTPException(status_code=404, detail="Event not found")
    return result[0]


@app.post("/api/events", status_code=201)
def create_event(req: CreateEventRequest, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    success, message = crud.create_event(
        db, req.name, req.start_datetime, req.end_datetime,
        req.venue_id, req.org_id, req.category_ids, req.price
    )
    if not success:
        raise HTTPException(status_code=400, detail=message)
    return {"message": message}


@app.put("/api/events/{event_id}")
def update_event(event_id: int, req: UpdateEventRequest, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    success, message = crud.update_event(
        db, event_id, req.name, req.start_datetime, req.end_datetime,
        req.venue_id, req.org_id, req.category_ids, req.price
    )
    if not success:
        raise HTTPException(status_code=400, detail=message)
    return {"message": message}


@app.patch("/api/events/{event_id}/cancel")
def cancel_event(event_id: int, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    from sqlalchemy import text
    try:
        db.execute(text("UPDATE events SET status = 'Cancelled' WHERE event_id = :eid"), {"eid": event_id})
        db.commit()
        return {"message": "Event cancelled successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))


@app.patch("/api/events/{event_id}/restore")
def restore_event(event_id: int, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    from sqlalchemy import text
    try:
        db.execute(text("UPDATE events SET status = 'Upcoming' WHERE event_id = :eid"), {"eid": event_id})
        db.commit()
        return {"message": "Event restored successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))

# ─── Categories ───────────────────────────────────────────────────────────────

@app.get("/api/categories")
def get_categories(db=Depends(get_db)):
    df = crud.get_categories(db)
    return df_to_list(df)

# ─── Bookings ─────────────────────────────────────────────────────────────────

@app.get("/api/my-bookings")
def my_bookings(current_user: dict = Depends(get_current_user), db=Depends(get_db)):
    guest_id = current_user.get("guest_id")
    if not guest_id:
        raise HTTPException(status_code=400, detail="No guest profile linked to this account")
    df = crud.get_guest_registered_events(db, guest_id)
    return df_to_list(df)


@app.post("/api/bookings", status_code=201)
def create_booking(req: CreateBookingRequest, current_user: dict = Depends(get_current_user), db=Depends(get_db)):
    guest_id = current_user.get("guest_id")
    if not guest_id:
        raise HTTPException(status_code=400, detail="No guest profile linked to this account")
    success, message = crud.create_registration(db, req.event_id, guest_id)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    # Fetch the registration_id
    from sqlalchemy import text
    row = db.execute(
        text("SELECT registration_id FROM registrations WHERE event_id=:eid AND guest_id=:gid ORDER BY registration_date DESC LIMIT 1"),
        {"eid": req.event_id, "gid": guest_id}
    ).fetchone()
    registration_id = row[0] if row else None
    return {"success": True, "message": message, "registration_id": registration_id}


@app.post("/api/checkin")
def checkin(req: CheckinRequest, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    success, message = crud.check_in_guest(db, req.registration_id)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    return {"success": True, "message": message}

# ─── Finance & Attendance ─────────────────────────────────────────────────────

@app.get("/api/finance/summary")
def finance_summary(db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    df = crud.get_finance_summary(db)
    return df_to_list(df)


@app.get("/api/attendance/summary")
def attendance_summary(db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    df = crud.get_attendance_summary(db)
    return df_to_list(df)


@app.put("/api/finance/{event_id}")
def update_finance(event_id: int, req: UpdateFinanceRequest, db=Depends(get_db), _=Depends(require_organizer_or_admin)):
    success, message = crud.update_finance(db, req.finance_id, req.planned_budget, req.actual_cost)
    if not success:
        raise HTTPException(status_code=400, detail=message)
    return {"message": message}

# ─── Venues & Organizers (for dropdowns) ─────────────────────────────────────

@app.get("/api/venues")
def get_venues(db=Depends(get_db)):
    from sqlalchemy import text
    rows = db.execute(text("SELECT venue_id, venue_name, capacity FROM venues ORDER BY venue_name")).fetchall()
    return [{"venue_id": r[0], "venue_name": r[1], "capacity": r[2]} for r in rows]


@app.get("/api/organizers")
def get_organizers(db=Depends(get_db)):
    from sqlalchemy import text
    rows = db.execute(text("SELECT organizer_id, organizer_name FROM organizers ORDER BY organizer_name")).fetchall()
    return [{"organizer_id": r[0], "organizer_name": r[1]} for r in rows]


# ─── Static Files (HTML/CSS/JS Frontend) ─────────────────────────────────────
web_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "web")
if os.path.exists(web_dir):
    from fastapi.staticfiles import StaticFiles
    app.mount("/", StaticFiles(directory=web_dir, html=True), name="web")
