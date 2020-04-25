const {Pool} = require('pg');

var host = 'localhost'; //local
var host1 = '3.101.21.253'; //EC2 instance 
var host2 = '54.193.80.70'; //EC2b instance 

// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'soundCloud',
//   password: 'password',
//   port: 5432
// });


//Connection to docker container on EC2 instance
const pool = new Pool({
  user: 'postgres',
  host: host2,
  database: 'soundcloud',
  password: 'password',
  port: 5433
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}