const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const addProduct = async (req, res) => {
  const { name, category, stock, reorderLevel } = req.body;

  try {
    const product = await Product.create({ name, category, stock, reorderLevel });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllProducts, addProduct };
