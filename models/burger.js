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
            'burgers', 'burger_name', 'devoured', burgerName, false, 
            (res) => {
                cb(res)
            }
        );
    },
    updateOne: function(id, cb) {
        orm.updateOne("burgers", 'devoured', true, id, (res) => {
            cb(res)
        });
    }
};

module.exports = burger;