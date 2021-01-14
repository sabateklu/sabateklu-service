const mongoose = require('mongoose');


const db = mongoose.connect('mongodb://localhost/recommended', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
