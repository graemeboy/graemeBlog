// Fields
var express = require("express");
var helpers = require("view-helpers");
var package = require("../../package.json");
var path = require("path");

// Exports
module.exports = function (app, config, db) {
    app.set("showStackError", true);

    // Ought to be placed before express.static
    app.use(require("compression")({
        filter: function (req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'))
        },
        level: 9
    }));

    // Favicon
    app.use(require("static-favicon")());
    app.use(express.static(path.resolve(config.root + '/../public/')));

    // Set views
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    // Parsers
    app.use(require("cookie-parser")("secret"));

    var bodyParser = require("body-parser");
    app.use(bodyParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    // Method Override
    app.use(require('method-override')());


    // Helpers
    app.use(helpers(config.app.name));

    // Routes
    app.use("/", require("../routes"));
    
    app.use(function (req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            title: "404 - Page not found",
            error: 'Page not found'
        });
    });

    // Print Stacktrace
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} // module.exports