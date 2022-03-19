const inquirer = require ("inquirer");
const db = require ("./db/db.js");

const init = () => {
    console.log("Greetings! Welcome to the Employee Managemant Tracker Tool!");
    menubar();
};

menu = () => {
    console.log("\n");

    // Inquirer Questions:
    inquirer
        .prompt(menuQs)
        .then((answers) => {
            if (answers.menu == "View All Departments") {
                viewDepartments();
            } else if (answers.menu == "View All Roles") {
                viewRoles();
                menu();
            } else if (answers.menu == "View All Employees") {
                viewEmployees();
            } else if (answers.menu == "Add a Department") {
                inquirer
                .prompt({
                    type: "input",
                    message:
                    "What is the name of the department you would like to add?",
                    name: "dept"
                })
                .then((answer) => {
                    addDepartment(answer.dept);
                });
            } else if (answers.menu == "Add a Role") {
                inquirer
                .prompt([
                    {
                    type: "input",
                    message: "What is the name of the role you would like to add?",
                    name: "role"
                    }, {
                    type: "input",
                    message: "What is the salary amount for this role?",
                    name: "salary"
                    }, {
                    type: "input",
                    message:
                        "What is the department id of the role you would like to add?",
                    name: "dept",
                    default: "1001"
                    }
                ])
                .then((answer) => {
                    let roleInfo = [answer.role, answer.salary, answer.dept];
                    addRole(roleInfo);
                });
            } else if (answers.menu == "Add an Employee") {
                inquirer
                .prompt([
                    {
                    type: "input",
                    message:
                        "What is the first name of the employee you would like to add?",
                    name: "firstName"
                    }, {
                    type: "input",
                    message:
                        "What is the last name of the employee you would like to add?",
                    name: "lastName"
                    }, {
                    type: "input",
                    message: "What is the employee's role id?",
                    name: "role"
                    }, {
                    type: "input",
                    message: "What is the employee's manager's id?",
                    name: "manager"
                    }
                ])
                .then((answer) => {
                    let employeeInfo = [
                    answer.firstName,
                    answer.lastName,
                    answer.role,
                    answer.manager
                    ];
                    addEmployee(employeeInfo);
                });
            } else if (answers.menu == "Update Employee Role") {
                updateEmployee();
            } else if (answers.menu == "Delete an Employee") {
                deleteEmp();
            } else if (answers.menu == "Delete a Department") {
                deleteDept();
            } else if (answers.menu == "Delete a Role") {
                deleteRole();
            } else {
                process.exit();
            }
            })
            .catch((error) => {
            console.log(error);
            });
        };

// Menu prompt questions for inquirer
const menuQs = [
    {
    type: "list",
    name: "menu",
    message: "What would you like to do next?",
    choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update Employee Role",
        "Delete an Employee",
        "Delete a Department",
        "Delete a Role",
        "Exit"
    ]
    }
];

// starts the program
init();
// Call the db function to return all employee related data
async function viewEmployees() {
    let employees = await db.findAllEmployees();
    console.log("\n");
    console.table(employees);
    menu();
}
// Call the db function to return all department data
async function viewDepartments() {
    let departments = await db.findAllDepartments();
    console.log("\n");
    console.table(departments);
    menu();
}
// Call the db function to return all role related data
    async function viewRoles() {
    let roles = await db.findAllRoles();
    console.log("\n");
    console.table(roles);
    menu();
}
// Call the db function to add new department, passing in the data from the user
async function addDepartment(newDept) {
    await db.addNewDepartment(newDept);
}
// Call the db function to add new role, passing in the data from the user
async function addRole(newRole, salary, deptId) {
    await db.addNewRole(newRole, salary, deptId);
}
// Call the db function to add new employee, passing in the data from the user
async function addEmployee(employeeInfo) {
    await db.addNewEmployee(employeeInfo);
}


}