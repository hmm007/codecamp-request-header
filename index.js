
var newserver = require('express');
var app = newserver();
var newmoment = require('moment');
var fs = require('fs');
var path = require('path');

app.listen(process.env.PORT || 3500);

app.get('/', function(req, res) {

     res.json({
        ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
    });
});


