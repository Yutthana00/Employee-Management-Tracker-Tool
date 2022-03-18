const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '1',
    database: 'management'
})

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;