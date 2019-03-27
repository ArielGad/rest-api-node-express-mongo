const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise; //mongo's Promise is deprecated

app.use(express.static('public'));

// body parser must come first over other uses
// so we can catch and use the data
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});
