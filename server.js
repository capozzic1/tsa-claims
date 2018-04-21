var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log("Listening on port " + port);
})
