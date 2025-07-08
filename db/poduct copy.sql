CREATE TABLE productIncome (
    id INTEGER PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
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
    material VARCHAR(100)
);