const connection = require("./connection");

// classes of functions
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    // Return all of the employee related data from the db
    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee. role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    // Return the department table from the db
    findAllDepartments() {
        return this.connection.query("SELECT * FROM department;");
    }
    // Return all the related data about the roles
    findAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }
    // Create a new dept using the value from inquirer
    addNewDepartment(newDept) {
        return this.connection.query(
            "INSERT INTO department (name) VALUES (?)",
            newDept,
                (err, result) => {
                if (err) throw error;
                else {
                    console.log(`Added new department ${newDept}`);
                    menu();
                }
            }
        );

    }

    // Create a new role using the value from inquirer
    addNewRole(roleInfo) {
        return this.connection.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            roleInfo,
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Added new role ${roleInfo[0]}`);
                    menu();
                }
            }
        );
    }

    // Update the selected employees role
    updateRole(updateInfo) {
        return this.connection.query(
            "UPDATE employee SET role_id = (?) WHERE first_name = ? AND last_name = ?;",
            updateInfo,
            (err, result) => {
                if (err) throw err;
                else {
                    console.log(
                        `Updated ${updateInfo[1]} ${updateInfo[2]}'s role id to ${updateInfo[0]}`
                    );
                    menu();
                }
            }
        );
    }


    // Create a new employee using the value from inquirer
    addNewEmployee(employeeInfo) {
        return this.connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            employeeInfo,
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(
                        `Added new employee ${employeeInfo[0]} ${employeeInfo[1]}`
                    );
                    menu();
                }
            }
        );
    }


    // Help function which returns a list of the employee first and last names
    employeeNames() {
        return this.connection.query(
            "SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS employee_name FROM employee;"
        );
    }
    // Help function which returns a list of the employee first and last names
    departmentNames() {
        return this.connection.query(
            "SELECT department.name AS departments FROM department;"
        );
    }


  // Help function which returns a list of the employee first and last names
  roleNames() {
    return this.connection.query("SELECT role.title AS roles FROM role;");
  }

    // Delete an employee using the value from inquirer
    deleteEmployee(name) {
        return this.connection.query(
            "DELETE FROM employee WHERE first_name = ? AND last_name = ?;",
            name,
            (err, result) => {
                if (err) throw err;
                else {
                    console.log(`Deleted ${name[0]} ${name[1]}`);
                    menu();
                }
            }
        );
    }
}