// connecting mysql to node, then being exported

const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        // port: 3306,
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}

connection.connect(err => {
    if (err) {
        return console.log('error connecting: ' + err.stack);
    }
    console.log('connected as id: ' + connection.threadId)
});

module.exports = connection;