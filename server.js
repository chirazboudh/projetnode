// Fast html framework
var express = require('express');
var app = express();

// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// For the database
var sqlite3 = require('sqlite3'); //.verbose();
var db = new sqlite3.Database('./projet.db');

// Add restful controller
require('./wifiController')(app, db, jsonParser);

// Serve static files
app.use(express.static('wwwroot'))

 var server = app.listen(process.env.PORT || 3000, function () {

 var port = server.address().port;
    console.log("App now running on port", port);

});
