// pg-promise setup
const pgp = require('pg-promise') (); //Import pg-promise
const connectionString = "postgres://localhost:5432/class_db" // URL where postgres is running on the computer
const db = pgp(connectionString) //connected db instance - this is a JS object with methods that let you talk to postgres


module.exports = db;