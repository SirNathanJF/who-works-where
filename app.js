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
    .then((answers) => {
        const { choices } = answers; 
  
        if (choices === "View all Employees") {
          viewAllEmployees();
        }
  
        if (choices === "View all employees by Department") {
          viewEmployeesByDepartment();
        }
  
        if (choices === "View all employees by their Manager") {
          viewEmployeesByManager();
        }
  
        if (choices === "View all Positions") {
          viewAllPositions();
        }
  
        if (choices === "View all Departments") {
          viewAllDepartments();
        }
  
        if (choices === "View Salaries by Department") {
          viewSalariesByDepartment();
        }
  
        if (choices === "Add Employee") {
          addEmployee();
        }
  
        if (choices === "Add Department") {
          addDepartment();
        }
  
        if (choices === "Add Position") {
          addPosition();
        }
  
        if (choices === "Delete Employee") {
          deleteEmployee();
        }
  
        if (choices === "Delete Department") {
          deleteDepartment();
        }
  
        if (choices === "Delete Position") {
          deletePosition();
        }
  
        if (choices === "Update Employee Position") {
          updatePosition();
        }

        if (choices === "Update the Manager that Oversees Employee") {
            updateOversight();
          }
  
        if (choices === "No Action") {
            console.log('Goodbye!');
          connection.end()
      };
    });
  };

initialPrompt();