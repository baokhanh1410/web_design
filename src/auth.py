import bcrypt
from sqlalchemy import text

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

def authenticate_user(session, username, password):
    query = text("""
        SELECT u.user_id, u.password_hash, r.role_name, p.permission_name, u.guest_id, g.guest_name, g.guest_email
        FROM users u
        JOIN roles r ON u.role_id = r.role_id
        JOIN role_permissions rp ON r.role_id = rp.role_id
        JOIN permissions p ON rp.permission_id = p.permission_id
        LEFT JOIN guests g ON u.guest_id = g.guest_id
        WHERE u.username = :username
    """)

    result = session.execute(query, {"username": username}).fetchall()

    if result:
        stored_hash = result[0][1]
        if verify_password(password, stored_hash):
            user_data = {
                "user_id": result[0][0],
                "role": result[0][2],
                "guest_id": result[0][4],
                "name": result[0][5] or username,
                "email": result[0][6] or "",
                "permissions": [row[3] for row in result]
            }
            return user_data
    return None

def register_new_guest_user(session, username, password, name, email, phone):
    try:
        # Kiểm tra trùng tên đăng nhập
        check_query = text("SELECT COUNT(*) FROM users WHERE username = :username")
        if session.execute(check_query, {"username": username}).scalar() > 0:
            return False, "Tên đăng nhập đã tồn tại!"

        # Tạo bản ghi khách hàng
        insert_guest = text("""
            INSERT INTO guests (guest_name, guest_email, phone_number)
            VALUES (:name, :email, :phone)
            RETURNING guest_id
        """)
        guest_id = session.execute(insert_guest, {"name": name, "email": email, "phone": phone}).scalar()

        # Tạo tài khoản người dùng
        hashed_pw = hash_password(password)
        insert_user = text("""
            INSERT INTO users (username, password_hash, role_id, guest_id)
            VALUES (:username, :password_hash, 3, :guest_id)
        """)
        session.execute(insert_user, {
            "username": username,
            "password_hash": hashed_pw,
            "guest_id": guest_id
        })

        session.commit()
        return True, "Đăng ký thành công! Vui lòng đăng nhập."
    except Exception as e:
        session.rollback()
        return False, f"Lỗi hệ thống: {str(e)}"
