const { request, response } = require('express');
const { isValidDate } = require('../middleware/validate-fields');
const Product = require('../models/Product');

const getProduct = async (req, res = response) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });

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
  const newProduct = new Product(req.body);
  newProduct.save();
  res.status(200).json({
    success: true,
    message: 'Product created',
    product: newProduct
  });
};

// const isExpided = () => {
//     return
// }

// const calcIva = () => {

// }
const updateProduct = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { bId, ...rest } = req.body;

    const product = await Product.findOneAndUpdate({ _id: id }, rest,
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

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(400).json({
        success: false,
        message: 'This Bill doesn\'t exist'
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
