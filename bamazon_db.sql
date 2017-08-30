CREATE DATABASE bamazon_db;
USE bamazon_db;


CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(7, 2) NOT NULL,
  stock_quantity DECIMAL(7, 2) UNSIGNED NOT NULL,
  PRIMARY KEY (item_id)
);

Mock Data bellow

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Shoes", Sports, 120.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ( "Ninteno Switch", Gaming, 374.99, 1551);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Titanic", Movies, 20.99, 50000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Backpack", Sports, 50.59, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Young Frankinstien", Movie, 20.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Fork", Household, 4.25, 1000000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Inceptionr", Movie, 20.99, 250000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario Sunshine", Gaming, 50.99, 500 );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Bed sheets", Household, 14.99, 7000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Piggy Bank", Household, 5.99, 50000);


SELECT * FROM bamazon_db.products;
