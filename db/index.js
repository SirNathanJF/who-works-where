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
  viewByManager(managerId) {
    return this.connection
      .promise()
      .query(
        "SELECT * FROM employee LEFT JOIN occupation on occupation.id = employee.occupation_id LEFT JOIN department on department.id = occupation.department_id WHERE manager_id = ? ",
        managerId
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
