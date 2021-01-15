const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/recommended', { useNewUrlParser: true, useUnifiedTopology: true });

const adventuresSchema = new mongoose.Schema({
  name: String,
  image: String,
  reviews: Number,
  rating: Number,
  price: String,
  liked: Boolean,
  timesBooked: Number,
});

const Adventures = mongoose.model('Adventures', adventuresSchema);

module.exports = Adventures;
