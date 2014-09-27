// Fields
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//var http = require('http');
var config = require("./app/config/config");

require("./app/config/express")(app, config);

//app.set('port', 3000);
// Server
//http.createServer(app).listen(process.env.PORT || 3000, function () {
//  console.log('Express server listening on port ' + app.get('port'));
//}); // createServer

app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// Exports

exports = module.exports = app;