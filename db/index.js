const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllEmployees() {
    return this.connection
      .promise()
      .query("SELECT * FROM employee")
      .then(([rows]) => rows)
      .catch(console.log);
  }

  viewByDepartment() {
    return this.connection
      .promise()
      .query("SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.department_name AS department FROM employee LEFT JOIN occupation ON employee.occupation_id = occupation.id LEFT JOIN department ON occupation.department_id = department.id ORDER BY department ASC;")
      .then(([rows]) => rows);
  }

  viewByManager() {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM employee LEFT JOIN occupation on occupation.id = employee.occupation_id LEFT JOIN department on department.id = occupation.department_id ORDER BY manager_id ASC;",
      )
      .then(([rows]) => rows);
  }

  viewAllPositions() {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM occupation LEFT JOIN department on department.id = occupation.department_id"
      )
      .then(([rows]) => rows);
  }
}
module.exports = new db(connection);
