const mysql = require('mysql2');
// create a new MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shrp@18',
  database: 'dbms'
});
// connect to the MySQL database
db.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:', error);
}else{
console.log('Connected to MySQL database!');
}
});
module.exports = db;