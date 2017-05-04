var express = require('express');
var app = express();
var dbConnection = require('../config/db_development');

// Connecting to database
dbConnection.connectTo();

// Including routers:
var index = require('./index');
var products = require('./products');

// Configuring routers passing the app as parameter:
index.configure(app);
products.configure(app);

module.exports = app;