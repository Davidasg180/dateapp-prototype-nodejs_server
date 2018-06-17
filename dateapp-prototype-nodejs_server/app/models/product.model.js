const mongoose = require('mongoose');

let productShema = mongoose.Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Prodcut',productShema);