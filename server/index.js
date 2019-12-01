const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

//included db file and created object for it
var config = require('./db');

//initiating node app using express
var app = express();

app.use(bodyParser.json());
app.use(cors());

//setting header in cors
app.use('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

    if (req.method == 'OPTIONS') {
        res.status(200);
    }
    else {
        next();
    }
});

app.use('/', require('./route'));

app.use(function (req, res, next) {
    res.sendStatus(404).json({ status: 'no APIs found' }).end();
});

//setting port for server
app.set('port', config.port);

//initiating server
var server = app.listen(app.get('port'), function () {
    console.log(`Listening to port - ${server.address().port}`);
});

mongoose.connect(config.mongo.url, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log(`database connection is ready to communicate`);

});