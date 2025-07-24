CREATE TABLE product_income (
    id INTEGER PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    brand VARCHAR(100),
    model VARCHAR(50),
    category VARCHAR(50),
    description TEXT,
    size VARCHAR(15),
    color VARCHAR(50),
    gender VARCHAR(20),
    purchase_price NUMERIC(10,2) NOT NULL,
    sale_price NUMERIC(10,2) NOT NULL,
    amount INT NOT NULL DEFAULT 0,
    photo TEXT,
    material VARCHAR(100),
    supplier_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
);