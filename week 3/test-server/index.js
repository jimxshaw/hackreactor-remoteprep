var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log(req.url);
   console.log(req.method);
   res.send('Hello world!');
});

app.get('/helloJim', function (req, res) {
   console.log(req.url);
   console.log(req.method);
   res.send('Hello Jim!');
});

var server = app.listen(8081, function () {
  console.log("Example app listening at port 8081");
});
