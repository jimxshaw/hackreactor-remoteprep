var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number 
});

module.exports = mongoose.model('City', citySchema);




