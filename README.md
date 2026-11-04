# EventHub - Event Management System (EMS)

Hệ thống phân phối và quản lý vé sự kiện trực tuyến hiện đại mang phong cách Traveloka, tích hợp xác thực phân quyền Role-Based Access Control (RBAC), API RESTful chuẩn FastAPI và mô hình AI gợi ý giá vé thông minh.

---

## 👥 Thông Tin Sinh Viên Thực Hiện

* **Trường:** Đại học Kinh tế Quốc dân (National Economics University - NEU)
* **Khoa / Viện:** Viện Công nghệ Thông tin & Kinh tế số
* **Chuyên ngành:** Khoa học Dữ liệu (Data Science) - Lớp **DS66B**
* **Giảng viên hướng dẫn:** ThS. Trần Hùng - DatCom Lab
* **Môn học:** Thiết kế Web / Cơ sở Dữ liệu

### Thành viên nhóm:
| STT | Họ và tên | Mã sinh viên (ID) | Vai trò trong dự án |
| :---: | :--- | :---: | :--- |
| 1 | **Nguyễn Bảo Khánh** | **11247178** |(Admin) |
| 2 | **Chu Đức Duy** | **11247159** | (Staff) |
| 3 | **Trần Quang Huy** | **11247176** | (Organizer) |

---

## 🌟 Tính Năng Nổi Bật (Features)

* **Giao diện người dùng hiện đại (Traveloka Style):**
  * Khám phá sự kiện, bộ lọc đa năng (theo danh mục, thời gian, mức giá, từ khóa tìm kiếm theo thời gian thực).
  * Quy trình đặt vé mượt mà: chọn số lượng vé, nhập thông tin, áp dụng mã giảm giá (voucher).
  * Vé điện tử thông minh (**E-Ticket**): Mã QR động định danh từng vé hỗ trợ điểm danh soát vé tức thì.
* **Bảng điều khiển quản trị (Admin & Organizer Dashboard):**
  * Theo dõi chỉ số KPIs: Doanh thu thực tế, tỷ lệ lấp đầy ghế (occupancy rate), tổng số vé bán ra.
  * Quản lý vòng đời sự kiện: Thêm mới, chỉnh sửa trạng thái, hủy sự kiện.
  * Widget định giá thông minh (**AI Pricing Recommender**): Dự báo và đề xuất giá vé tối ưu dựa trên quy mô địa điểm và thể loại sự kiện.
* **Xác thực & Phân quyền chặt chẽ (RBAC + Bcrypt):**
  * Bảo mật mật khẩu bằng thuật toán băm **Bcrypt** chuẩn hóa.
  * Hỗ trợ 4 nhóm vai trò riêng biệt: **Admin**, **Staff**, **Organizer**, **Guest**.
  * Chức năng **1-Click Quick Login** để trải nghiệm nhanh mọi vai trò trên giao diện.
* **Tối ưu hóa Cơ sở Dữ liệu (PostgreSQL):**
  * Thiết kế lược đồ chuẩn hóa (3NF): bảng sự kiện, địa điểm, ban tổ chức, danh mục, khách tham dự, tài chính và phân quyền.
  * Sử dụng Index tối ưu tốc độ truy vấn tìm kiếm sự kiện và người dùng.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

* **Frontend / UI:** HTML5, CSS3 hiện đại (CSS Variables, Flexbox, Grid), JavaScript ES6+ (Fetch API, Async/Await, Web Storage).
* **Backend API:** Python 3.10+, [FastAPI](https://fastapi.tiangolo.com/), Uvicorn (ASGI Server).
* **Bảo mật & Xác thực:** Bcrypt, Python-JOSE (JWT Bearer Token), RBAC.
* **Cơ sở dữ liệu & ORM:** PostgreSQL, [SQLAlchemy](https://www.sqlalchemy.org/), Psycopg2-binary.
* **Data Science / ML:** Scikit-Learn, Pandas, NumPy, XGBoost.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
web_design/
├── web/                     # Giao diện Web Frontend
│   ├── index.html           # Single Page Application (Explore, Bookings, Admin)
│   ├── css/
│   │   └── style.css        # Toàn bộ Style Traveloka hiện đại, Responsive
│   └── js/
│       └── app.js           # Logic ứng dụng, render động, State Management
├── api/                     # RESTful API Backend (FastAPI)
│   ├── main.py              # Các router xác thực, sự kiện, đơn hàng, ML
│   ├── auth_utils.py        # Xử lý JWT Bearer và dependency kiểm tra quyền
│   └── database.py          # Khởi tạo kết nối DB SQLAlchemy
├── src/                     # Core Business Logic & Data Access Layer
│   ├── auth.py              # Xử lý băm mật khẩu Bcrypt, đăng nhập, đăng ký
│   ├── connection.py        # Cấu hình engine kết nối Database
│   └── crud.py              # Các hàm truy vấn dữ liệu sự kiện, báo cáo tài chính
├── sql/                     # Cơ sở dữ liệu
│   ├── schema.sql           # Cấu trúc bảng (DDL), chỉ mục (Index) & quan hệ (FK)
│   ├── seed.sql             # Dữ liệu khởi tạo (Seed data)
│   └── normalize_events_vnd.sql
├── docs/                    # Tài liệu đặc tả, sơ đồ ERD
├── requirements.txt         # Danh sách thư viện Python phụ thuộc
├── .env                     # Cấu hình biến môi trường kết nối DB
└── README.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Clone mã nguồn
```bash
git clone https://github.com/baokhanh1410/web_design.git
cd web_design
```

### 2. Thiết lập môi trường ảo Python
```bash
# macOS / Linux:
python3 -m venv .venv
source .venv/bin/activate

# Windows:
python -m venv .venv
.venv\Scripts\activate
```

### 3. Cài đặt các thư viện phụ thuộc
```bash
pip install -r requirements.txt
```

### 4. Cấu hình Cơ sở dữ liệu (.env)
Tạo file `.env` tại thư mục gốc của dự án với nội dung cấu hình PostgreSQL:
```ini
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=event_management
```

Nạp lược đồ và dữ liệu mẫu vào PostgreSQL:
```bash
psql -U your_postgres_user -d event_management -f sql/schema.sql
psql -U your_postgres_user -d event_management -f sql/seed.sql
```

### 5. Khởi chạy Backend API
```bash
uvicorn api.main:app --reload --port 8000
```
Tài liệu tương tác API Swagger UI sẽ có tại: `http://localhost:8000/docs`

### 6. Khởi chạy Giao diện Frontend
* Bạn có thể mở trực tiếp file [`web/index.html`](web/index.html) bằng bất kỳ trình duyệt nào.
* Hoặc chạy server tĩnh bằng Python:
  ```bash
  python3 -m http.server 3000 --directory web
  ```
  Sau đó truy cập: `http://localhost:3000`

---

## 🔑 Danh Sách Tài Khoản Mặc Định

Hệ thống đã thiết lập sẵn các tài khoản thử nghiệm tương ứng với từng vai trò trong hệ thống:

| Tên đăng nhập | Mật khẩu | Vai trò (Role) | Họ và tên | Chức năng chính |
| :--- | :--- | :--- | :--- | :--- |
| **`admin`** | `admin123` | **Admin** | **Nguyễn Bảo Khánh** | Toàn quyền quản trị hệ thống, duyệt sự kiện, AI dashboard |
| **`staff01`** | `staff123` | **Staff** | **Chu Đức Duy** | Nhân viên soát vé, thực hiện check-in mã QR |
| **`organizer01`** | `org123` | **Organizer** | **Trần Quang Huy** | Ban tổ chức, tạo mới & theo dõi sự kiện của mình |
| **`guest01`** | `guest123` | **Guest** | **Nguyễn Văn Khang** | Khách hàng tìm kiếm, đặt mua vé & nhận E-Ticket |

*(Trên giao diện web, bạn cũng có thể bấm trực tiếp các nút **1-Click Login** trong khung đăng nhập để chuyển đổi nhanh giữa các vai trò).*
