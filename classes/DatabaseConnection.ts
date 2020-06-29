const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
    host: "localhost",
    user: config.databaseInfo.username,
    password: config.databaseInfo.password,
    database: config.databaseInfo.database
});