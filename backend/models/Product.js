const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  reorderLevel: { type: Number, required: true, default: 5 },
});

module.exports = mongoose.model('Product', productSchema);
