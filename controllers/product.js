const { request, response } = require('express');
const Product = require('../models/Product');

const getProduct = async (req, res = response) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ idProduct: id });

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'This Product doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      product
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const getProducts = async (req = request, res = response) => {
  const [elements, products] = await Promise.all([
    Product.countDocuments(),
    Product.find()
  ]);

  if (!products) {
    return res.status(400).json({
      success: false,
      message: 'No found products'
    });
  }
  res.status(400).json({
    success: true,
    elements,
    products
  });
};

const createProduct = async (req = request, res = response) => {
  try {
    const product = await Product.findOne({ idProduct: req.body.idProduct });
    if (product) {
      return res.status(400).json({
        success: false,
        message: 'This Product is Duplicate'
      });
    }

    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(200).json({
      success: true,
      message: 'Product created',
      product: newProduct
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

// const isExpided = () => {
//     return
// }

// const calcIva = () => {

// }
const updateProduct = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { idProduct, ...rest } = req.body;

    const product = await Product.findOneAndUpdate({ idProduct: id }, rest,
      { new: true, useFindAndModify: false });

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'This Product doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      product
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

const deleteProduct = async (req, res = response) => {
  try {
    const { id } = req.params;

    const product = await Product.findOneAndDelete({ idProduct: id });

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'This Product doesn\'t exist'
      });
    }

    return res.status(200).json({
      success: true,
      product
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
