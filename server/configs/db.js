const mysql = require("mysql2");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Root12345",
  database: "tmu",
});

module.exports = db;
