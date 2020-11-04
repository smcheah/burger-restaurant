// calls orm functions for burger input

import orm from '../config/orm.js';

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burger', (res) => {
            cb(res)
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(
            'burger', 'burger_name', 'devoured', burgerName, false, 
            (res) => {
                cb(res)
            }
        );
    },
    updateOne: function(burgerName, cb) {
        orm.selectAll('burger', 'burger_name', burgerName, (res) => {
            cb(res)
        });
    }
};

module.exports = burger;