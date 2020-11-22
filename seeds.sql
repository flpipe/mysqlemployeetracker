use employees;

INSERT INTO department
    (name)
VALUES
    ('HR'),
    ('QA'),
    ('DEV');

INSERT INTO role
(title, salary, department_id)
VALUES
      ('HR Manager', 100000, 1),
      ('QA Engineer', 80000, 1),
      ('DEV Engineer', 150000, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Ivan', 'Ihoe', 1, NULL),
    ('Sarah', 'Jones', 2, 1),
    ('Mike', 'Fisch', 3, NULL);

