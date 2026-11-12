-- ============================================================
-- CORE TABLES
-- ============================================================

-- events
CREATE TABLE events (
    event_id   BIGSERIAL PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_date TIMESTAMP NOT NULL,
    end_time   TIMESTAMP NOT NULL,
    venue_id   BIGINT NOT NULL,
    status     VARCHAR(20) NOT NULL DEFAULT 'Upcoming'
                   CHECK (status IN ('Upcoming', 'Ongoing', 'Completed', 'Cancelled')),
    base_price NUMERIC(8, 2) NOT NULL,
    organizer_id BIGINT NOT NULL,
    image_url  VARCHAR(500)
);
CREATE INDEX events_event_name_index ON events (event_name);
CREATE INDEX events_event_date_index ON events (event_date);
CREATE INDEX events_venue_id_event_date_index ON events (venue_id, event_date);

-- categories
CREATE TABLE categories (
    category_id   SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

-- event_categories
CREATE TABLE event_categories (
    event_id    BIGINT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (event_id, category_id)
);

-- guests
CREATE TABLE guests (
    guest_id     BIGSERIAL PRIMARY KEY,
    guest_name   VARCHAR(255) NOT NULL,
    guest_email  VARCHAR(255) NOT NULL,
    phone_number VARCHAR(16) NOT NULL
);
CREATE INDEX guests_guest_name_index ON guests (guest_name);
CREATE INDEX guests_guest_email_index ON guests (guest_email);

-- organizers
CREATE TABLE organizers (
    organizer_id   BIGSERIAL PRIMARY KEY,
    organizer_name VARCHAR(255) NOT NULL,
    address        VARCHAR(255) NOT NULL,
    phone_number   VARCHAR(16) NOT NULL
);

-- ============================================================
-- ATTENDANCE & FINANCE TABLES
-- ============================================================

-- venues
CREATE TABLE venues (
    venue_id      BIGSERIAL PRIMARY KEY,
    venue_name    VARCHAR(255) NOT NULL,
    venue_address VARCHAR(255) NOT NULL,
    capacity      INT NOT NULL
);

-- registrations
CREATE TABLE registrations (
    registration_id  BIGSERIAL PRIMARY KEY,
    event_id         BIGINT NOT NULL,
    guest_id         BIGINT NOT NULL,
    registration_date TIMESTAMP NOT NULL DEFAULT NOW(),
    attendance_status BOOLEAN NOT NULL DEFAULT false,
    feedback_rating   INT NOT NULL DEFAULT 0
);
CREATE INDEX registrations_registration_date_index ON registrations (registration_date);
CREATE INDEX registrations_attendance_status_index ON registrations (attendance_status);

-- event_finance
CREATE TABLE event_finance (
    finance_id     BIGSERIAL PRIMARY KEY,
    event_id       BIGINT NOT NULL,
    planned_budget NUMERIC(15, 2) NOT NULL,
    actual_cost    NUMERIC(15, 2) NOT NULL
);

-- ============================================================
-- RBAC TABLES (Role-Based Access Control)
-- ============================================================

-- roles
CREATE TABLE roles (
    role_id   SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

-- permissions
CREATE TABLE permissions (
    permission_id   SERIAL PRIMARY KEY,
    permission_name VARCHAR(255) NOT NULL,
    description     TEXT NOT NULL
);
CREATE INDEX permissions_permission_name_index ON permissions (permission_name);

-- role_permissions (junction table for many-to-many RBAC)
CREATE TABLE role_permissions (
    role_id       INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id)
);

-- users
CREATE TABLE users (
    user_id       SERIAL PRIMARY KEY,
    username      VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_id       INT NOT NULL,
    guest_id      BIGINT NULL
);
CREATE INDEX users_username_index ON users (username);

-- wishlists (User event bookmarks)
CREATE TABLE wishlists (
    wishlist_id   BIGSERIAL PRIMARY KEY,
    user_id       BIGINT NOT NULL,
    event_id      BIGINT NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_user_event UNIQUE (user_id, event_id)
);
CREATE INDEX wishlists_user_id_index ON wishlists (user_id);

-- ============================================================
-- FOREIGN KEYS
-- ============================================================

ALTER TABLE users ADD CONSTRAINT users_role_id_foreign FOREIGN KEY (role_id) REFERENCES roles (role_id);
ALTER TABLE users ADD CONSTRAINT users_guest_id_foreign FOREIGN KEY (guest_id) REFERENCES guests (guest_id);
ALTER TABLE registrations ADD CONSTRAINT registrations_guest_id_foreign FOREIGN KEY (guest_id) REFERENCES guests (guest_id);
ALTER TABLE registrations ADD CONSTRAINT registrations_event_id_foreign FOREIGN KEY (event_id) REFERENCES events (event_id);
ALTER TABLE event_finance ADD CONSTRAINT event_finance_event_id_foreign FOREIGN KEY (event_id) REFERENCES events (event_id);
ALTER TABLE events ADD CONSTRAINT events_organizer_id_foreign FOREIGN KEY (organizer_id) REFERENCES organizers (organizer_id);
ALTER TABLE events ADD CONSTRAINT events_venue_id_foreign FOREIGN KEY (venue_id) REFERENCES venues (venue_id);
ALTER TABLE role_permissions ADD CONSTRAINT role_permissions_role_id_foreign FOREIGN KEY (role_id) REFERENCES roles (role_id);
ALTER TABLE role_permissions ADD CONSTRAINT role_permissions_permission_id_foreign FOREIGN KEY (permission_id) REFERENCES permissions (permission_id);
ALTER TABLE event_categories ADD CONSTRAINT event_categories_event_id_foreign FOREIGN KEY (event_id) REFERENCES events (event_id);
ALTER TABLE event_categories ADD CONSTRAINT event_categories_category_id_foreign FOREIGN KEY (category_id) REFERENCES categories (category_id);
ALTER TABLE wishlists ADD CONSTRAINT wishlists_user_id_foreign FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;
ALTER TABLE wishlists ADD CONSTRAINT wishlists_event_id_foreign FOREIGN KEY (event_id) REFERENCES events (event_id) ON DELETE CASCADE;

-- ============================================================
-- FUNCTIONS & TRIGGERS
-- ============================================================

-- Function: Enforce Event Capacity (replaces MySQL trigger)
CREATE OR REPLACE FUNCTION fn_enforce_capacity()
RETURNS TRIGGER AS $$
DECLARE
    v_capacity             INT;
    v_current_registrations INT;
BEGIN
    SELECT v.capacity INTO v_capacity
    FROM events e
    JOIN venues v ON e.venue_id = v.venue_id
    WHERE e.event_id = NEW.event_id;

    SELECT COUNT(*) INTO v_current_registrations
    FROM registrations
    WHERE event_id = NEW.event_id;

    IF v_current_registrations >= v_capacity THEN
        RAISE EXCEPTION 'Event capacity reached.';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_enforce_capacity
BEFORE INSERT ON registrations
FOR EACH ROW EXECUTE FUNCTION fn_enforce_capacity();

-- ============================================================
-- VIEWS
-- ============================================================

-- View: Event Attendance Summary
CREATE VIEW vw_event_attendance_summary AS
SELECT
    e.event_id,
    e.event_name,
    e.event_date,
    v.venue_name,
    COUNT(r.registration_id) AS total_registrations,
    SUM(CASE WHEN r.attendance_status = true THEN 1 ELSE 0 END) AS checked_in_count,
    ROUND(
        CASE
            WHEN COUNT(r.registration_id) = 0 THEN 0
            ELSE (SUM(CASE WHEN r.attendance_status = true THEN 1 ELSE 0 END)::NUMERIC / COUNT(r.registration_id)) * 100
        END, 2
    ) AS attendance_rate
FROM events e
JOIN venues v ON e.venue_id = v.venue_id
LEFT JOIN registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.event_name, e.event_date, v.venue_name
ORDER BY e.event_date DESC;

-- View: Finance Summary
CREATE OR REPLACE VIEW vw_finance_summary AS
SELECT
    f.finance_id,
    e.event_id,
    e.event_name,
    e.event_date,
    e.status,
    f.planned_budget,
    f.actual_cost,
    ROUND(
        COALESCE(COUNT(r.registration_id), 0) * e.base_price, 2
    ) AS revenue,
    ROUND(f.planned_budget - f.actual_cost, 2) AS variance,
    ROUND(
        (COALESCE(COUNT(r.registration_id), 0) * e.base_price) - f.actual_cost, 2
    ) AS profit
FROM event_finance f
JOIN events e ON f.event_id = e.event_id
LEFT JOIN registrations r ON e.event_id = r.event_id
GROUP BY f.finance_id, e.event_id, e.event_name, e.event_date, e.status, e.base_price, f.planned_budget, f.actual_cost
ORDER BY e.event_date DESC;