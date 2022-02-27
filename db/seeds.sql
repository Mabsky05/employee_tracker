INSERT INTO dept (dept_name)
VALUES 
("Human Resources"), 
("Finance"),
("Operations"),
("Advertising");
    

INSERT INTO roles (title, salary, department_id)
VALUES 
("Manager", 180000, 1),
("Assistant Manager", 100000, 1),
("Accountant", 65000, 2),
("Engineer", 80000, 3),
("Marketer", 60000, 4),
("Intern", 40000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
("Aaron", "Anderson", 1, NULL),
("Bob", "Billington", 2, 1),
("Chris", "Carter", 3, 1),
("Daniel", "Davidson", 4, 2),
("Evelyn", "Elliot", 5, 2 ),
("Francesca", "Farrington", 6, 1)
;

