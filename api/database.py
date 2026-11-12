import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.connection import get_session
from typing import Generator

def get_db() -> Generator:
    session = get_session()
    if session is None:
        raise RuntimeError("Kết nối cơ sở dữ liệu thất bại. Vui lòng kiểm tra file cấu hình .env.")
    try:
        yield session
    finally:
        session.close()
