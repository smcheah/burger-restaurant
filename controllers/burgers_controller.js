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

module.exports = router;