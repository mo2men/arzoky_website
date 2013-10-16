var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new buffer(100);
var string ;
buffer = fs.readFileSynch("index.html","utf8");
string = buf.toString("utf8");

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
