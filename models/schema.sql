DROP DATABASE IF EXISTS app_db;
CREATE DATABASE app_db;
USE app_db;

CREATE TABLE userTable(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    isLoggedIn BOOLEAN NOT NULL
);

CREATE TABLE mainFeed(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL,
    message VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);