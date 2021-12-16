const { validationResult } = require('express-validator');
const { request, response } = require('express');

const products = ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO'];

const validateFields = (req = request, res = response, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: err.mapped()
    });
  }
  next();
};

const validateProduct = (product) => {
  if (!(products.find(elem => elem === product))) {
    throw new Error(`The product it is not valid, ${products}`);
  }
  return true;
};

const validateNumber = (number) => {
  if (!(number >= 5)) {
    throw new Error(`The stock min is 5`);
  }
  return true;
};


const validateDate = (date) => {
  if (!(isValidDate(date))) {
    throw new Error(`Error format date , [dd/mm/yyyy]`);
  }
  return true;
};


const isValidDate = (dateString) => {
  const validate = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
  return validate.test(dateString) ? true : false;
};

module.exports = {
  validateFields,
  validateProduct,
  validateNumber,
  validateDate,
  isValidDate
};
