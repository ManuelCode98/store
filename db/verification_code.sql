
CREATE TABLE verification_code (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    code VARCHAR(6) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    attempts INT DEFAULT 0 CHECK (attempts >= 0)
);