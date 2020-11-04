// connecting mysql to node, then being exported

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: PROCESS.ENV.port || 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) {
        return console.log('error connecting: ' + err.stack)
    }
    console.log('connected as id: ' + connection.thread_id)
    console.log('connected on http://localhost:' + port)
});

module.exports = connection;