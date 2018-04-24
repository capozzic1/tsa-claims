var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');
app.use(cors());
app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');

});
app.listen(port, function() {
  console.log("Listening on port " + port);
})
