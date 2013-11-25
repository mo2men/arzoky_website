var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

var buffer = new Buffer(100);
buffer = fs.readFileSync("index.html");
var str = new String();
str = buffer.toString('utf-8');


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
