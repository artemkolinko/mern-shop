import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401);
  // throw new Error('Not auth');
  res.json(products);
});

// @desc    Fetch single Product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // res.status(404).json({ message: 'Product not found' });

    // if we want 404 error, not 500 (by defoult)
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
