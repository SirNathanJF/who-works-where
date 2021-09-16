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