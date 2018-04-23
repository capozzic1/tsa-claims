var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');
app.use(cors());
app.use(express.static('public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');

});
app.listen(port, function() {
  console.log("Listening on port " + port);
})
