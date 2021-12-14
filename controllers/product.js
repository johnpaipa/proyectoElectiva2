const { request, response } = require('express');
const { isValidDate } = require('../middleware/validate-fields');
const Product = require('../models/Product');


const getProduct = async (req = request, res = response) => {

    const [elements, products] = await Promise.all([
        Product.countDocuments(),
        Product.find()
    ])

    if (!products) {
        return res.status(400).json({
            success: false,
            message: 'No found products'
        })
    }
    res.status(400).json({
        success: true,
        elements,
        products
    })
};

const createProduct = async (req = request, res = response) => {
    const newProduct = new Product(req.body);
    newProduct.save();
    res.status(200).json({
        success: true,
        message: 'Product created',
        product: newProduct
    })
};

// const isExpided = () => {
//     return
// }

// const calcIva = () => {

// }

module.exports = {
    getProduct,
    createProduct
};

