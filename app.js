// Fields
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var http = require('http');
var config = require("./app/config/config");
var mongoose = require("mongoose");

// Database
var dbStart = function () {
    // Connect
    return mongoose.connect(config.db);
}; // dbStart ()

db = dbStart();
    
// Database Error Handling
mongoose.connection.on('error', function (err) {
  console.log(err)
});
// Reconnect when closed
mongoose.connection.on('disconnected', function () {
  dbStart()
});

// Models
var models_path = __dirname + "/app/models";
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) require (models_path + '/' + file)
});

require("./app/config/express")(app, config, db);

app.set('port', 3000);

// Server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
}); // createServer

// Exports

exports = module.exports = app;