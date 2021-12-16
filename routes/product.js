const { Router } = require('express');
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  isExpired,
  calcIva
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

/**
 * @swagger
 * components:
 *  schemas:
 *    product:
 *      type: object
 *      properties:
 *        idProduct:
 *          type: string
 *          description: prodcut id
 *        value:
 *          type: Number
 *          description: product value
 *        stock:
 *          type: Number
 *        stockMin:
 *          type: Number
 *          description: default 5
 *        dateExpired:
 *          type: string
 *          description: product dateExpired
 *        description:
 *          type: string,
 *          description: description
 *        typeProduct:
 *          type: string
 *          description: ['VIVERES', 'LICORES', 'MEDICINAS', 'ASEO']
 *      required:
 *        - idProduct
 *        - value
 *        - stock
 *        - description
 *        - dateExpired
 *        - typeProduct
 *      example:
 *         idProduct : 5
 *         value: 20000
 *         description: product
 *         stock: 5
 *         stockMin: 5
 *         dateExpired: 2022/12/12
 *         typeProduct: VIVERES
 *
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: return all products
 *     tags: [product]
 *     responses:
 *      200:
 *        description: all products!
 *        content:
 *          application/json:
 *            schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/product'
 *
 */
router.get('/', [], getProducts);


/**
 * @swagger
 * /api/product/new:
 *   post:
 *     summary: create a new product
 *     tags: [product]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/product'
 *     responses:
 *      200:
 *        description: new product created!
 */
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

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: return a product
 *     tags: [product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     responses:
 *      200:
 *        description: a product!
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/product'
 *
 *      404:
 *        description: product not found
 *
 */
router.get('/:id', [], getProduct);

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: update a product
 *     tags: [product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     responses:
 *      200:
 *        description: product update!
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/product'
 *      404:
 *        description: product not found
 *
 */
router.put('/:id', [
  check('description', 'description is required').not().isEmpty(),
  check('value', 'value is required').isNumeric(),
  check('stock', 'stock is required').isNumeric(),
  check('typeProduct', 'typeProduct is required').not().isEmpty(),
  check('dateExpired', 'dateExpired is required').not().isEmpty(),
  check('dateExpired').custom(date => validateDate(date)),
  check('stock').custom(stock => validateNumber(stock)),
  check('typeProduct').custom(typeProduct => validateProduct(typeProduct)),
  validateFields
], updateProduct);


/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: delete a product
 *     tags: [product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     responses:
 *      200:
 *        description: product delete!
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/product'
 *
 *      404:
 *        description: product not found
 *
 */
router.delete('/:id', [], deleteProduct);

router.get('/isExpired/:id', isExpired);
router.get('/calIva/:id', calcIva);

module.exports = router;
