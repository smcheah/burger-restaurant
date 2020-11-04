// these methods will execute mysql queries in the controllers
// to retrieve and store data in the database

import connection from './connection.js';

const orm = {
    selectAll: () => {
        let queryString = `SELECT * FROM burgers`;
        connection.query(
            queryString,
            function (err, result) {
                if (err) throw err;
                console.log('selected all: ' + result);
            }
        )
    },
    insertOne: (burgerName) => {
        let queryString = `INSERT INTO burgers (burger_name, devoured)
        VALUES ('?', false)`;
        connection.query(
            queryString,
            [burgerName],
            function (err, result) {
                if (err) throw err;
                console.log('inserted: ' + result);
            }
        )
    },
    updateOne: (burgerName) => {
        let queryString = `UPDATE burgers SET burger_name='?'`;
        connection.query(
            queryString,
            [burgerName],
            function (err, result) {
                if (err) throw err;
                console.log('updated: ' + result);
            }
        )
    },
    
};

module.exports = orm;