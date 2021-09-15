DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE position (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(65) NOT NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (position_id)
        REFERENCES position(id)
        ON DELETE SET NULL,
    FOREIGN KEY (manager_id)
        REFERENCES employee(id)
        ON DELETE SET NULL
)