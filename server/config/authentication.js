var express = require('express');
var app = express();
var expressjwt = require('express-jwt');
var cors = require('cors');

app.use(cors());
app.use(expressjwt({secret: 'show me the way'}) // this is the keyword/keyphrase to generate authorization token
   .unless({path: [
       '/',
       '/auth/login'
   ]}));

module.exports = app;