
var newserver = require('express');
var app = newserver();
var newmoment = require('moment');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3500;

app.listen(process.env.PORT || 3500);

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      res.status(err.status).end();
    }
  });
});

app.get('/:datestring', function(req,res) {
  var myDate;
  if(/^\d{8,}$/.test(req.params.datestring)) {
    myDate = newmoment(req.params.datestring, "X");
  } else {
    myDate = newmoment(req.params.datestring, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});
