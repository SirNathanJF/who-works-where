USE employee_db;

INSERT INTO department (department_name)
VALUES
    ('IT'),
    ('Finance'),
    ('Sales');

INSERT INTO occupation (title, salary, department_id)
VALUES
    ('Web Developer', 75000, 1),
    ('Software Engineer', 100000, 1),
    ('Accountant', 65000, 2), 
    ('Marketing Coordindator', 70000, 2), 
    ('Sales Lead', 90000, 3),
    ('Project Manager', 100000, 3),
    ('Operations Manager', 90000, 3);

INSERT INTO employee (first_name, last_name, occupation_id, manager_id)
VALUES
    ('Rand', 'al-Thor', 1, null),
    ('Sirus', 'Amory', 4, null),
    ('Jahar', 'Narishma', 2, 1),
    ('Wilhelm', 'Ryan', 3, 1),
    ('Kvothe', 'Windcaller', 3, 1),
    ('Moraine', 'Damodred', 5, 2),
    ('Lan', 'Mandragoran', 6, 2),
    ('Matrim', 'Cauthon', 7, 1),
    ('Perrin', 'Aybara', 5, 2);