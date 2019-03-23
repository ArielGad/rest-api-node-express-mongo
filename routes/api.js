const express = require("express");
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from DB
router.get('/ninjas', function (req, res) {
    res.send({type: 'GET'});
});

// add a new ninja to DB
router.post('/ninjas', function (req, res) {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

// update ninja to DB
router.put('/ninjas/:id', function (req, res) {
    res.send({type: 'PUT'});
});

// delete ninja from DB
router.delete('/ninjas/:id', function (req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;