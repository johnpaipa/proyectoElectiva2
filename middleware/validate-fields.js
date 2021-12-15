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
  const validate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return validate.test(dateString) ? true : false;
};

module.exports = {
  validateFields,
  validateProduct,
  validateNumber,
  validateDate,
  isValidDate
};
