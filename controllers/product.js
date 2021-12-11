const { response } = require('express');
const Product = require('../models/Product');

const getProducts  = async (req, res = response) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      products
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: 'Contact with admin'
    });
  }
};

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

const createProduct = async (req, res = response) => {
    try {
      const product = new Product(req.body);
  
      await product.save();
  
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
