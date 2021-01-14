const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const adventuresSchema = new mongoose.Schema({
  name: String,
  image: String,
  reviews: Number,
  rating: Number,
  price: String,
  liked: Boolean,
  timesBooked: Number
})

const Adventures = mongoose.model('Adventures', adventuresSchema);

module.exports = Adventures;