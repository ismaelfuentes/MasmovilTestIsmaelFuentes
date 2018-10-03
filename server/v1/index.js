'user strict'

/// /////////////////////
// Libs
/// /////////////////////
var express = require('express')
var bodyParser = require('body-parser')


const API_PORT = 8669

/// /////////////////////
// Initialization
/// /////////////////////
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({
    limit: '10mb'
}))

// middleware
app.all('/*', function (request, response, next) {

    response.header('Content-Type', 'application/json')
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,PUT,DELETE')
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.header('Access-Control-Expose-Headers', 'Content-Type, Authorization')

    next();
});

// routes
const routes = require('./routes');
routes.initRoutes(app);


// start the server
var server = app.listen(API_PORT, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Api levantada en: " + host + ":" + port)
});
