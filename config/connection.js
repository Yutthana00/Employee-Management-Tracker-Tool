const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    // LocalHost OR 127.0.0.1
    host:'localhost',
    user: 'root',
    password: '1',
    database: 'management'
})

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;