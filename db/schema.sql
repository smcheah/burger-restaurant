DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
use burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured boolean NOT NULL,
    PRIMARY KEY (id)
);