-- Ten sample events after 29 October 2026.
-- Uses existing venues, organizers and categories; safe to run again.
BEGIN;

WITH new_events (event_name, event_date, end_time, venue_id, organizer_id, base_price, category_name) AS (
    VALUES
    ('Diễn đàn Công nghệ và AI Việt Nam 2026', TIMESTAMP '2026-11-03 08:30:00', TIMESTAMP '2026-11-03 17:00:00', 1, 1, 350000, 'Conference'),
    ('Workshop Python và Phân tích dữ liệu', TIMESTAMP '2026-11-07 09:00:00', TIMESTAMP '2026-11-07 12:00:00', 2, 2, 200000, 'Workshop'),
    ('Đêm nhạc Acoustic Chạm Mùa Đông', TIMESTAMP '2026-11-08 19:00:00', TIMESTAMP '2026-11-08 22:00:00', 3, 3, 250000, 'Concert'),
    ('Hội thảo Khởi nghiệp dành cho Sinh viên', TIMESTAMP '2026-11-12 14:00:00', TIMESTAMP '2026-11-12 17:00:00', 4, 4, 100000, 'Seminar'),
    ('Workshop Thiết kế UI/UX thực hành', TIMESTAMP '2026-11-14 08:30:00', TIMESTAMP '2026-11-14 12:00:00', 5, 5, 180000, 'Workshop'),
    ('Hội nghị Chuyển đổi số Doanh nghiệp 2026', TIMESTAMP '2026-11-18 08:00:00', TIMESTAMP '2026-11-18 17:00:00', 6, 6, 450000, 'Conference'),
    ('Tọa đàm Kỹ năng Thuyết trình và Giao tiếp', TIMESTAMP '2026-11-21 14:00:00', TIMESTAMP '2026-11-21 17:00:00', 7, 7, 120000, 'Seminar'),
    ('Đêm nhạc Indie Sắc Màu Tuổi Trẻ', TIMESTAMP '2026-11-28 18:30:00', TIMESTAMP '2026-11-28 22:00:00', 8, 8, 300000, 'Concert'),
    ('Workshop Nhiếp ảnh và Kể chuyện bằng hình ảnh', TIMESTAMP '2026-12-05 09:00:00', TIMESTAMP '2026-12-05 12:00:00', 9, 9, 220000, 'Workshop'),
    ('Diễn đàn Nghề nghiệp và Kết nối Doanh nghiệp', TIMESTAMP '2026-12-12 08:30:00', TIMESTAMP '2026-12-12 16:30:00', 10, 10, 150000, 'Conference')
), inserted AS (
    INSERT INTO events (event_name, event_date, end_time, venue_id, organizer_id, base_price, status)
    SELECT n.event_name, n.event_date, n.end_time, n.venue_id, n.organizer_id, n.base_price, 'Upcoming'
    FROM new_events n
    WHERE NOT EXISTS (
        SELECT 1 FROM events e
        WHERE e.event_name = n.event_name AND e.event_date = n.event_date
    )
    RETURNING event_id, event_name, event_date
)
INSERT INTO event_categories (event_id, category_id)
SELECT i.event_id, c.category_id
FROM inserted i
JOIN new_events n ON n.event_name = i.event_name AND n.event_date = i.event_date
JOIN categories c ON c.category_name = n.category_name;

COMMIT;
