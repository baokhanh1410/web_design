"""
FastAPI Bridge - api/database.py
Wraps src/connection.py session factory into a FastAPI dependency.
"""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.connection import get_session
from typing import Generator


def get_db() -> Generator:
    """FastAPI dependency: yields a SQLAlchemy session and ensures cleanup."""
    session = get_session()
    if session is None:
        raise RuntimeError("Database connection failed. Check your .env configuration.")
    try:
        yield session
    finally:
        session.close()
