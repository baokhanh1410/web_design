import pandas as pd
from sqlalchemy import text

def get_all_events(session):
    query = text("""
        SELECT e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name, e.status, e.base_price,
               COALESCE(e.image_url, '') as image_url,
               STRING_AGG(c.category_name, ', ') as categories,
               v.capacity,
               COALESCE(r_count.cnt, 0) as current_registrations
        FROM events e
        JOIN venues v ON e.venue_id = v.venue_id
        LEFT JOIN organizers o ON e.organizer_id = o.organizer_id
        LEFT JOIN (SELECT event_id, COUNT(*) as cnt FROM registrations GROUP BY event_id) r_count ON e.event_id = r_count.event_id
        LEFT JOIN event_categories ec ON e.event_id = ec.event_id
        LEFT JOIN categories c ON ec.category_id = c.category_id
        GROUP BY e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name, e.status, e.base_price, e.image_url, v.capacity, r_count.cnt
        ORDER BY e.event_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def get_guest_registered_events(session, guest_id):
    query = text("""
        SELECT r.registration_id, r.registration_date, r.attendance_status,
               e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name, e.status, e.base_price,
               COALESCE(e.image_url, '') as image_url,
               STRING_AGG(c.category_name, ', ') as categories
        FROM registrations r
        JOIN events e ON r.event_id = e.event_id
        JOIN venues v ON e.venue_id = v.venue_id
        LEFT JOIN organizers o ON e.organizer_id = o.organizer_id
        LEFT JOIN event_categories ec ON e.event_id = ec.event_id
        LEFT JOIN categories c ON ec.category_id = c.category_id
        WHERE r.guest_id = :gid
        GROUP BY r.registration_id, r.registration_date, r.attendance_status,
                 e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name, e.status, e.base_price, e.image_url
        ORDER BY r.registration_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"gid": guest_id})
    return df

def get_categories(session):
    query = text("SELECT category_id, category_name FROM categories ORDER BY category_name ASC")
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def create_event(session, name, start_datetime, end_datetime, venue_id, org_id, category_ids, price):
    query = text("""
        INSERT INTO events (event_name, event_date, end_time, venue_id, organizer_id, base_price)
        VALUES (:name, :start, :end, :v_id, :o_id, :price)
        RETURNING event_id
    """)
    try:
        new_event_id = session.execute(query, {
            "name": name, "start": start_datetime, "end": end_datetime,
            "v_id": venue_id, "o_id": org_id, "price": price
        }).scalar()

        if category_ids:
            cat_query = text("INSERT INTO event_categories (event_id, category_id) VALUES (:eid, :cid)")
            for cid in category_ids:
                session.execute(cat_query, {"eid": new_event_id, "cid": cid})

        session.commit()
        return True, "Tạo sự kiện thành công!"
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def get_event_by_id(session, event_id):
    query = text("""
        SELECT e.event_id, e.event_name, e.event_date, e.end_time,
               e.venue_id, v.venue_name, v.venue_address, v.capacity,
               e.organizer_id, o.organizer_name,
               e.status, e.base_price,
               COALESCE(e.image_url, '') as image_url,
               STRING_AGG(c.category_name, ', ') as categories
        FROM events e
        LEFT JOIN venues v ON e.venue_id = v.venue_id
        LEFT JOIN organizers o ON e.organizer_id = o.organizer_id
        LEFT JOIN event_categories ec ON e.event_id = ec.event_id
        LEFT JOIN categories c ON ec.category_id = c.category_id
        WHERE e.event_id = :eid
        GROUP BY e.event_id, e.event_name, e.event_date, e.end_time,
                 e.venue_id, v.venue_name, v.venue_address, v.capacity,
                 e.organizer_id, o.organizer_name, e.status, e.base_price, e.image_url
    """)
    cat_query = text("SELECT category_id FROM event_categories WHERE event_id = :eid")

    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"eid": event_id})
        cats_df = pd.read_sql(cat_query, conn, params={"eid": event_id})

    if not df.empty:
        df['category_ids'] = [cats_df['category_id'].tolist()]
    return df

def update_event(session, event_id, name, start_datetime, end_datetime, venue_id, org_id, category_ids, price):
    query = text("""
        UPDATE events
        SET event_name = :name, event_date = :start, end_time = :end,
            venue_id = :v_id, organizer_id = :o_id, base_price = :price
        WHERE event_id = :eid
    """)
    try:
        session.execute(query, {
            "name": name, "start": start_datetime, "end": end_datetime,
            "v_id": venue_id, "o_id": org_id, "price": price,
            "eid": event_id
        })

        session.execute(text("DELETE FROM event_categories WHERE event_id = :eid"), {"eid": event_id})
        if category_ids:
            cat_query = text("INSERT INTO event_categories (event_id, category_id) VALUES (:eid, :cid)")
            for cid in category_ids:
                session.execute(cat_query, {"eid": event_id, "cid": cid})

        session.commit()
        return True, "Cập nhật sự kiện thành công!"
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def get_events_list(session):
    query = text("""
        SELECT event_id, event_name FROM events ORDER BY event_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def get_available_events_for_guest(session, guest_id):
    query = text("""
        SELECT e.event_id, e.event_name, v.capacity, COALESCE(r_count.cnt, 0) as current_registrations
        FROM events e
        JOIN venues v ON e.venue_id = v.venue_id
        LEFT JOIN (SELECT event_id, COUNT(*) as cnt FROM registrations GROUP BY event_id) r_count ON e.event_id = r_count.event_id
        WHERE e.event_id NOT IN (
            SELECT event_id FROM registrations WHERE guest_id = :gid
        )
        ORDER BY e.event_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"gid": guest_id})
    return df

def get_guests_list(session):
    query = text("""
        SELECT guest_id, guest_name FROM guests ORDER BY guest_name ASC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def get_registrations_by_event(session, event_id):
    query = text("""
        SELECT r.registration_id, g.guest_name, g.guest_email, g.phone_number,
               r.registration_date, r.attendance_status, r.feedback_rating
        FROM registrations r
        JOIN guests g ON r.guest_id = g.guest_id
        WHERE r.event_id = :eid
        ORDER BY r.registration_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"eid": event_id})
    return df

def get_guest_own_registrations(session, event_id, guest_id):
    query = text("""
        SELECT r.registration_id, g.guest_name, g.guest_email, g.phone_number,
               r.registration_date, r.attendance_status, r.feedback_rating
        FROM registrations r
        JOIN guests g ON r.guest_id = g.guest_id
        WHERE r.event_id = :eid AND r.guest_id = :gid
        ORDER BY r.registration_date DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"eid": event_id, "gid": guest_id})
    return df

def create_registration(session, event_id, guest_id):
    # Kiểm tra đã đăng ký chưa
    check_query = text("""
        SELECT COUNT(*) as cnt FROM registrations
        WHERE event_id = :eid AND guest_id = :gid
    """)
    result = session.execute(check_query, {"eid": event_id, "gid": guest_id}).fetchone()
    if result[0] > 0:
        return False, "Khách hàng đã đăng ký sự kiện này rồi!"

    # Kiểm tra sức chứa
    capacity_query = text("""
        SELECT v.capacity, (SELECT COUNT(*) FROM registrations r WHERE r.event_id = :eid) as current_registrations
        FROM events e
        JOIN venues v ON e.venue_id = v.venue_id
        WHERE e.event_id = :eid
    """)
    capacity_result = session.execute(capacity_query, {"eid": event_id}).fetchone()
    if capacity_result:
        venue_capacity = capacity_result[0]
        current_registrations = capacity_result[1]
        if current_registrations >= venue_capacity:
            return False, "Sự kiện đã đạt sức chứa tối đa và đã hết vé!"

    insert_query = text("""
        INSERT INTO registrations (event_id, guest_id, registration_date, attendance_status, feedback_rating)
        VALUES (:eid, :gid, NOW(), false, 0)
    """)
    try:
        session.execute(insert_query, {"eid": event_id, "gid": guest_id})
        session.commit()
        return True, "Đăng ký thành công!"
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def check_in_guest(session, registration_id):
    try:
        exists = session.execute(
            text("SELECT COUNT(*) FROM registrations WHERE registration_id = :rid"),
            {"rid": registration_id}
        ).scalar()
        if exists == 0:
            return False, "Không tìm thấy lượt đăng ký với mã này."

        already_in = session.execute(
            text("SELECT attendance_status FROM registrations WHERE registration_id = :rid"),
            {"rid": registration_id}
        ).scalar()
        if already_in:
            return False, "Khách đã được điểm danh trước đó."

        session.execute(
            text("UPDATE registrations SET attendance_status = true WHERE registration_id = :rid"),
            {"rid": registration_id}
        )
        session.commit()
        return True, "Điểm danh thành công!"
    except Exception as e:
        session.rollback()
        return False, str(e)

def get_attendance_summary(session):
    query = text("SELECT * FROM vw_event_attendance_summary")
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def get_guest_profile(session, guest_id):
    query = text("""
        SELECT guest_name, guest_email, phone_number
        FROM guests
        WHERE guest_id = :gid
    """)
    result = session.execute(query, {"gid": guest_id}).fetchone()
    if result:
        return {
            "name": result[0],
            "email": result[1],
            "phone": result[2]
        }
    return None

def get_finance_summary(session):
    query = text("SELECT * FROM vw_finance_summary")
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn)
    return df

def get_finance_by_event(session, event_id):
    query = text("""
        SELECT finance_id, planned_budget, actual_cost
        FROM event_finance
        WHERE event_id = :eid
    """)
    result = session.execute(query, {"eid": event_id}).fetchone()
    if result:
        return {
            "finance_id": result[0],
            "planned_budget": float(result[1]),
            "actual_cost": float(result[2])
        }
    return None

def update_finance(session, finance_id, planned_budget, actual_cost):
    query = text("""
        UPDATE event_finance
        SET planned_budget = :pb, actual_cost = :ac
        WHERE finance_id = :fid
    """)
    try:
        session.execute(query, {
            "pb": planned_budget, "ac": actual_cost,
            "fid": finance_id
        })
        session.commit()
        return True, "Cập nhật tài chính thành công!"
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def cancel_guest_registration(session, registration_id, guest_id=None):
    try:
        if guest_id:
            query = text("DELETE FROM registrations WHERE registration_id = :rid AND guest_id = :gid")
            res = session.execute(query, {"rid": registration_id, "gid": guest_id})
        else:
            query = text("DELETE FROM registrations WHERE registration_id = :rid")
            res = session.execute(query, {"rid": registration_id})
        session.commit()
        if res.rowcount > 0:
            return True, "Hủy đăng ký vé thành công!"
        return False, "Không tìm thấy vé tương ứng."
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def get_user_wishlist(session, user_id):
    query = text("""
        SELECT e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name,
               e.status, e.base_price,
               COALESCE(e.image_url, '') as image_url,
               STRING_AGG(c.category_name, ', ') as categories,
               w.created_at as added_at
        FROM wishlists w
        JOIN events e ON w.event_id = e.event_id
        JOIN venues v ON e.venue_id = v.venue_id
        LEFT JOIN organizers o ON e.organizer_id = o.organizer_id
        LEFT JOIN event_categories ec ON e.event_id = ec.event_id
        LEFT JOIN categories c ON ec.category_id = c.category_id
        WHERE w.user_id = :uid
        GROUP BY e.event_id, e.event_name, e.event_date, v.venue_name, o.organizer_name,
                 e.status, e.base_price, e.image_url, w.created_at
        ORDER BY w.created_at DESC
    """)
    with session.get_bind().connect() as conn:
        df = pd.read_sql(query, conn, params={"uid": user_id})
    return df

def add_to_wishlist(session, user_id, event_id):
    try:
        query = text("""
            INSERT INTO wishlists (user_id, event_id)
            VALUES (:uid, :eid)
            ON CONFLICT (user_id, event_id) DO NOTHING
        """)
        session.execute(query, {"uid": user_id, "eid": event_id})
        session.commit()
        return True, "Đã thêm vào danh sách yêu thích!"
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"

def remove_from_wishlist(session, user_id, event_id):
    try:
        query = text("DELETE FROM wishlists WHERE user_id = :uid AND event_id = :eid")
        res = session.execute(query, {"uid": user_id, "eid": event_id})
        session.commit()
        if res.rowcount > 0:
            return True, "Đã xóa khỏi danh sách yêu thích!"
        return False, "Sự kiện không có trong danh sách yêu thích."
    except Exception as e:
        session.rollback()
        return False, f"Lỗi: {str(e)}"
