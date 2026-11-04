-- Normalize the original 50 sample events to Vietnamese names and VND ticket prices.
-- Prices are sample VND amounts, not an exchange-rate conversion.
-- The 10 events added by add_events_20261029.sql already use this convention.
-- Event IDs and all other fields are preserved. Safe to run again.
BEGIN;

UPDATE events AS e
SET event_name = normalized.event_name,
    base_price = normalized.base_price
FROM (VALUES
    (1, 'Ngày hội Công nghệ và Âm nhạc Sáng tạo', 350000),
    (2, 'Diễn đàn Kinh tế số và Đổi mới sáng tạo', 300000),
    (3, 'Đêm nhạc Giai điệu Thanh xuân', 250000),
    (4, 'Hội nghị Quản trị Doanh nghiệp Bền vững', 350000),
    (5, 'Lớp thực hành Sáng tác và Biểu diễn Âm nhạc', 280000),
    (6, 'Hội nghị Trí tuệ Nhân tạo Ứng dụng', 400000),
    (7, 'Lớp thực hành Lập trình Web Cơ bản', 200000),
    (8, 'Diễn đàn Thiết kế Sản phẩm số', 250000),
    (9, 'Hội nghị và Thực hành Phân tích Dữ liệu', 350000),
    (10, 'Chuyên đề trực tuyến Nhập môn Điện toán Đám mây', 100000),
    (11, 'Ngày hội Phát triển Ứng dụng Di động', 300000),
    (12, 'Hội nghị Nâng cao Năng suất Làm việc', 250000),
    (13, 'Hội nghị Bảo mật và An toàn Thông tin', 400000),
    (14, 'Giao lưu Âm nhạc Trực tuyến Kết nối Đam mê', 120000),
    (15, 'Diễn đàn Xây dựng Thương hiệu Cá nhân', 200000),
    (16, 'Chuyên đề trực tuyến Tư duy Thuật toán', 100000),
    (17, 'Lớp thực hành Kỹ năng Lãnh đạo Nhóm', 220000),
    (18, 'Hội nghị Hạ tầng Công nghệ Bền vững', 350000),
    (19, 'Lớp thực hành Quản lý Tri thức Cá nhân', 150000),
    (20, 'Ngày hội Kết nối Cộng đồng Sáng tạo', 250000),
    (21, 'Diễn đàn Kiến trúc Phần mềm Hiện đại', 300000),
    (22, 'Tọa đàm Kỹ năng Tìm kiếm và Kiểm chứng Thông tin', 120000),
    (23, 'Hội nghị Mô hình Kinh doanh số', 300000),
    (24, 'Ngày hội Thực hành Phát triển Phần mềm', 250000),
    (25, 'Giao lưu Nghệ thuật và Câu chuyện Sáng tạo', 180000),
    (26, 'Đêm nhạc Những Bản Tình Ca', 300000),
    (27, 'Diễn đàn Công nghệ Phân tán và Chuỗi khối', 350000),
    (28, 'Hội nghị Phát triển Nguồn nhân lực Trẻ', 250000),
    (29, 'Diễn đàn Phương pháp Học tập Hiệu quả', 150000),
    (30, 'Tọa đàm Quản lý Dữ liệu trong Doanh nghiệp', 180000),
    (31, 'Ngày hội Kết nối Nghề nghiệp và Nghệ thuật', 200000),
    (32, 'Diễn đàn Học máy và Mạng Nơ-ron', 350000),
    (33, 'Hội nghị Thực hành Đảm bảo Chất lượng Phần mềm', 300000),
    (34, 'Lớp thực hành Nghệ thuật Kể chuyện trên Sân khấu', 220000),
    (35, 'Diễn đàn Công nghiệp Văn hóa và Sáng tạo', 250000),
    (36, 'Ngày hội Giao lưu Văn hóa và Công nghệ', 200000),
    (37, 'Hội nghị Vận hành Dịch vụ số', 300000),
    (38, 'Lớp thực hành Chăm sóc Khách hàng Chuyên nghiệp', 180000),
    (39, 'Lớp thực hành Phối khí và Sản xuất Âm nhạc', 280000),
    (40, 'Ngày hội Công nghệ và Biểu diễn Nghệ thuật', 300000),
    (41, 'Tọa đàm Âm nhạc và Kết nối Cộng đồng', 150000),
    (42, 'Hội nghị Công cụ Cộng tác và Làm việc Nhóm', 250000),
    (43, 'Đêm nhạc Cảm xúc Bất tận', 350000),
    (44, 'Lớp thực hành Thiết kế Trải nghiệm Khách hàng', 220000),
    (45, 'Diễn đàn Thiết kế Giao diện và Nghệ thuật số', 300000),
    (46, 'Lớp thực hành Giải quyết Vấn đề Sáng tạo', 180000),
    (47, 'Diễn đàn Xu hướng Nghề nghiệp Thời đại số', 200000),
    (48, 'Chuyên đề trực tuyến Dịch vụ Khách hàng số', 100000),
    (49, 'Ngày hội Trải nghiệm Công nghệ và Nghệ thuật', 280000),
    (50, 'Giao lưu Âm nhạc và Cảm hứng Sống', 200000)
) AS normalized(event_id, event_name, base_price)
WHERE e.event_id = normalized.event_id
  AND (e.event_name IS DISTINCT FROM normalized.event_name
       OR e.base_price IS DISTINCT FROM normalized.base_price);

COMMIT;
