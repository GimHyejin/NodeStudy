const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql')

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
 

db.getConnection((err, connection) => {
    if (err) {
      
      console.error('MySQL 연결 오류:', err);
      if (connection) {
        connection.release();
      }
      return;
    }
    console.log('MySQL 연결 성공');
  });
module.exports = db;