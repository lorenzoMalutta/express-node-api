const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  quantity: Number,
  description: String,
});

module.exports = Product;
