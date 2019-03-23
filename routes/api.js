const express = require("express");
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from DB
router.get('/ninjas', function (req, res, next) {
    res.send({type: 'GET'});
});

// add a new ninja to DB
router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update ninja to DB
router.put('/ninjas/:id', function (req, res, next) {
    res.send({type: 'PUT'});
});

// delete ninja from DB
router.delete('/ninjas/:id', function (req, res, next) {
    res.send({type: 'DELETE'});
});

module.exports = router;