INSERT INTO deparment (name)
VALUE   ("Engineering"),
        ("Sales"),
        ("Finance"),
        ("Customer service"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES  ("Engineering Manager", 95000 , 2001),
        ("Software Engineer", 40000, 2001),
        ("Sales Manager", 80000, 2002),
        ("Sales", 35000, 2002),
        ("Customer Service Manager", 75000, 2003),
        ("Customer Service Support", 24000, 2003),
        ("Finance Manager", 89000, 2004),
        ("Accountant", 55000, 2004),
        ("Legal Team Manager", 85000, 2005),
        ("Lawyer", 55000, 2005);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("James", "Smith", 10, NULL),
("Michael", "Garcia", 9, NULL),
("Robert", "Rodriguez", 8, NULL),
("David", "Johnson", 7, NULL),
("Maria", "Underwood", 6, NULL),
("Tom", "Barkly", 3, 1),
("Mary", "Martinez", 3, 1),
("Ann", "Brown", 5, 2),
("Emily", "Robinson", 5, 2),
("Sophie", "Walker", 2, 3),
("Ella", "Jackson", 2, 3),
("Henry", "Turner", 1, 4),
("Peter", "Harris", 1, 4),
("Freya", "Jones", 4, 5),
("Alex", "Lewis", 4, 6);

        