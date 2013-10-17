var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer(100);
var string ;
buffer = fs.readFileSync("index.html","utf8");
string = buffer.toString("utf8");

app.get('/', function(request, response,string) {
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
