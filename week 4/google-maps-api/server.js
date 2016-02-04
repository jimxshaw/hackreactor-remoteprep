var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cities');

// If my application type is json coming across a form submit, parse the body 
// and add it to the request form. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Require cities and passing in the app. 
// When I require cities it's going to make the cities 
// variable equal to the returned function from cities.js module.exports.
// The reason app has to be passed in to the require is because within 
// cities.js, the function uses app as an argument for the HTTP methods 
// like app.get, app.post, app.put, app.delete.  
var cities = require('./routes/cities.js')(app);

var server = app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
});