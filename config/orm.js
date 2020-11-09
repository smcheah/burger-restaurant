// these methods will execute mysql queries in the controllers
// to retrieve and store data in the database

const connection = require('./connection.js');

const orm = {
    selectAll: (tableName, cb) => {
        let queryString = "SELECT * FROM ??;";
        connection.query(
            queryString,
            [tableName],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        )
    },
    insertOne: (tableName, col1, col2, val1, val2, cb) => {
        let queryString = `INSERT INTO ?? (??, ??) VALUES (?, ?);`;
        connection.query(
            queryString,
            [tableName, col1, col2, val1, val2],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        )
    },
    updateOne: (tableName, col1, val1, id, cb) => {
        let queryString = `UPDATE ?? SET ??=? WHERE id=?;`;
        connection.query(
            queryString,
            [tableName, col1, val1, id],
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        )
    }
};

module.exports = orm;