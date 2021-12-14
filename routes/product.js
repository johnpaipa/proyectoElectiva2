const { Router } = require('express');
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts
} = require(
  '../controllers/product');
const {
  validateFields,
  validateProduct,
  validateNumber,
  validateDate
} = require('../middleware/validate-fields');
const { check } = require('express-validator');

const router = Router();

router.get('/', [], getProducts);

router.post('/new', [
  check('idProduct', 'idProduct is required').not().isEmpty(),
  check('description', 'description is required').not().isEmpty(),
  check('value', 'value is required').isNumeric(),
  check('stock', 'stock is required').isNumeric(),
  check('typeProduct', 'typeProduct is required').not().isEmpty(),
  check('dateExpired', 'dateExpired is required').not().isEmpty(),
  check('dateExpired').custom(date => validateDate(date)),
  check('stock').custom(stock => validateNumber(stock)),
  check('typeProduct').custom(typeProduct => validateProduct(typeProduct)),
  validateFields
], createProduct);

router.get('/:id', [], getProduct);

router.post('/', [], createProduct);

router.put('/:id', [], updateProduct);

router.delete('/:id', [], deleteProduct);

module.exports = router;
