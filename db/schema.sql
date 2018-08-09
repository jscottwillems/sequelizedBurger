DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id INT AUTO_INCREMENT
    , burger_name VARCHAR(50)
    , devoured BOOLEAN DEFAULT 0
    , PRIMARY KEY (id)
);