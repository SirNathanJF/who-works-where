require('dotenv').config();

const mySql = require('mysql2')
const inquirer = require('inquirer'); 
const consoleTable = require('console.table');

const connection = mySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

connection.connect(function (err) {
    if (err) throw err;
});

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

const initialPrompt = () => {
    inquirer.prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: [
            'View all Employees',
            'View all Employees by Department',
            'View all Employees by their Manager',
            'View all Positions',
            'View all Departments',
            'View Salaries by Department',
            'Add Employee',
            'Add Department',
            'Add Position',
            'Delete Employee',
            'Delete Department',
            'Delete Position',
            'Update Employee Position',
            'Update the Manager that Oversees Employee',
            'No Action'
        ]
    })
    .then(answer => {
        switch (answer.choices) {
            case 'View all Employees':
                ViewAllEmployees();
                break;
            case 'View all Employees by Department':
                viewByDepartment();
                break;
            case 'View all Employees by their Manager':
                viewByManager();
                break;
            case 'View all Positions':
                viewByPosition();
                break;
            case 'View all Departments':
                viewAllDepartments();
                break;
            case 'View Salaries by Department':
                viewDepartmentSalaries();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Position':
                addPosition();
                break;
            case 'Remove Employee':
                removeEmployee();
                break;
            case 'Remove Department':
                removeDepartment();
                break;
            case 'Remove Position':
                removePosition();
                break;
            case 'Update Employee Position':
                changeEmployeePosition();
                break;
            case 'Update the Manager that Oversees Employee':
                changeOversight();
                break;
            case 'No Action':
                console.log('Goodbye!');
                connection.end()

        }
    });
};
initialPrompt();
