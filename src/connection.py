import os
import urllib.parse
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv()

# Quản lý kết nối PostgreSQL (Singleton Engine)
_engine = None

def get_db_engine():
    global _engine
    if _engine is not None:
        return _engine

    user = os.getenv('DB_USER')
    raw_password = os.getenv('DB_PASSWORD')
    host = os.getenv('DB_HOST')
    port = os.getenv('DB_PORT')
    database = os.getenv('DB_NAME')

    if not all([user, host, port, database]):
        print("Lỗi: Thiếu biến môi trường cơ sở dữ liệu (DB_USER, DB_HOST, DB_PORT, DB_NAME).")
        return None

    password = urllib.parse.quote_plus(raw_password) if raw_password else ""
    connection_string = f"postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}"

    try:
        engine = create_engine(connection_string, pool_pre_ping=True)
        with engine.connect() as conn:
            print("Kết nối PostgreSQL thành công!")
        _engine = engine
        return _engine
    except Exception as e:
        print(f"Lỗi kết nối PostgreSQL: {e}")
        return None

def get_session():
    engine = get_db_engine()
    if engine:
        Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
        return Session()
    return None
