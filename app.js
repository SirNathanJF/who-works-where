require("dotenv").config();
const db = require("./db");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const logo = require("asciiart-logo");
const config = require("./package.json");
console.log(logo(config).render());

const initialPrompt = () => {
  inquirer
    .prompt({
      name: "choices",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Employees by Department",
        "View all Employees by their Manager",
        "View all Positions",
        "View all Departments",
        "View Total Salaries by Department",
        "Add Employee",
        "Add Department",
        "Add Position",
        "Delete Employee",
        "Delete Department",
        "Delete Position",
        "Update Employee Position",
        "Update the Manager that Oversees Employee",
        "No Action",
      ],
    })
    .then((answer) => {
      switch (answer.choices) {
        case "View all Employees":
          viewAllEmployees();
          break;
        case "View all Employees by Department":
          viewByDepartment();
          break;
        case "View all Employees by their Manager":
          viewByManager();
          break;
        case "View all Positions":
          viewAllPosition();
          break;
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View Total Salaries by Department":
          viewDepartmentSalaries();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Position":
          addPosition();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Remove Department":
          removeDepartment();
          break;
        case "Remove Position":
          removePosition();
          break;
        case "Update Employee Position":
          changeEmployeePosition();
          break;
        case "Update the Manager that Oversees Employee":
          changeOversight();
          break;
        case "No Action":
          console.log("Goodbye!");
          connection.end();
      }
    });
};
initialPrompt();

const viewAllEmployees = function () {
  db.viewAllEmployees().then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const viewByDepartment = () => {
  db.viewByDepartment().then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const viewByManager = function () {
  db.viewByManager(2).then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const viewAllPosition = function () {
  db.viewAllPositions().then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const viewAllDepartments = function () {
  db.viewAllDepartments().then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const viewDepartmentSalaries = function () {
  db.viewDepartmentSalaries().then((data) => console.table("\n", data, "\n"));
  initialPrompt();
};

const addEmployee = function () {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is their first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is their last name?",
      },
      {
        name: "occupationId",
        type: "input",
        message: "What is their occupation?",
      },
      {
        name: "managerId",
        type: "list",
        message: "Select their manager.",
        choices: ["1", "2", "3"],
      },
    ])
    .then((employee) => {
      db.addEmployee(employee);
      console.log(
        `${employee.firstName} ${employee.lastName} was added to the database.\n`
      );
      initialPrompt();
    });
};

const addDepartment = function () {
  inquirer
    .prompt({
      name: "departmentName",
      type: "input",
      message: "What is the department name?",
    })
    .then((answer) => {
      db.addDepartment(answer);
      console.log(`${answer.departmentName} was added to the database.\n`);
      initialPrompt();
    });
};

const addPosition = function () {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What`s the title of this position?",
      },
      {
        name: "salary",
        type: "number",
        message: "What is the salary for this position?",
      },
      {
        name: "department_id",
        type: "list",
        message: "Choose a department to add the position to.",
        choices: ["IT", "Finance", "Sales"],
      },
    ])
    .then((answer) => {
      db.addPosition(answer);
      console.log(`${answer.title} was added to the database.\n`);
      initialPrompt();
    });
};

const removeEmployee = function () {
  db.selectAllEmployees().then((employees) => {
    const employeeChoicesForDelete = employees.map((employee) => ({
      value: employee.id,
      name: `${employee.first_name} ${employee.last_name}`,
    }));

    inquirer
      .prompt([
        {
          name: "employeeId",
          type: "list",
          message: "Who would you like to remove from the roster?",
          choices: employeeChoicesForDelete,
        },
      ])
      .then((answer) => {
        db.deleteEmployee(answer);
        console.log("Employee was removed from the database...\n");
        initialPrompt();
      });
  });
};
