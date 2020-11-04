// calls orm functions for burger input

const orm = require('../config/orm.js');

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(
            "burgers", 'burger_name', 'devoured', burgerName, FALSE, 
            (res) => {
                cb(res)
            }
        );
    },
    updateOne: function(burgerName, cb) {
        orm.updateOne("burgers", 'burger_name', burgerName, (res) => {
            cb(res)
        });
    }
};

module.exports = burger;