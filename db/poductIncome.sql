CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    model VARCHAR(50),
    category VARCHAR(50),
    description TEXT,
    size VARCHAR(15),
    color VARCHAR(50),
    gender VARCHAR(20),
    price NUMERIC(10,2) NOT NULL,
    amount INT NOT NULL DEFAULT 0,
    photo TEXT,
    asset BOOLEAN DEFAULT TRUE,
    material VARCHAR(100)
);