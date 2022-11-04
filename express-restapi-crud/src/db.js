const mysql = require("mysql2/promise");

async function connectDB() {
  const conn = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ronald1230",
    database:"tasksdb",
    ssl:{
        rejectUnauthorized:false
    }
  });

  const result = await conn.query("select 1+1 as result");
  console.log(result);
}
module.exports = connectDB;
