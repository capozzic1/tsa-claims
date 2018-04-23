var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');
app.use(cors());
app.use(express.static('./public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
app.listen(port, function() {
  console.log("Listening on port " + port);
})
