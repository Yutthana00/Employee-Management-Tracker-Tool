const connection = require("./connection");

// class function
class db {
    constructor(connection) {
        this.connection = connection;
    }
 
    findAllEmployee(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee. role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    findAllDepartment(){
        return this.connection.query("SELECT * FROM department;");
    }

    findAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    }

    addNewDeparment(newDept) {
        return this.connection.query(
            "INSERT INTO deparment (name) VALUES (?)",
            newDept,
            (err, result) => {
                if (err) throw error;
                else {
                    console.log(`Added new deparment ${newDept}`);
                    menubar();
                }
            }
        );
    }
    // created new role using the value from inquirer.
    addNewRole(roleInfo) {
        return this.connection.query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
            roleInfo,
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Added new role ${roleInfo[0]}`);
                    menubar();
                }
            }
        );
    }
 

}