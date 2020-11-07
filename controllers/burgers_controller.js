// router for app

const express = require('express');
const burger = require('../models/burger.js');

let router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function(result) {
        let hdlbars = { burgers: result };
        res.render('index', hdlbars);
    })
})

router.get('/api/burgers', function (req, res) {
    burger.selectAll(function(result) {
        return res.json(result);
    })
})

router.post('/api/burgers', function(req, res) {
    burger.insertOne(
        [req.body.burger_name],
        function (result) {
            return res.json(result);
        }
    )
})

router.put('/api/burgers/:id', function(req, res) {
    burger.updateOne(
        [req.params.id],
        function (result) {
            return res.json(result);
        }
    )
})

module.exports = router;