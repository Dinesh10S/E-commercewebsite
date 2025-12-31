CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50),
    amount DOUBLE,
    payment_method VARCHAR(50),
    status VARCHAR(30),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
