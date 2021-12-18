
const { Router } = require('express');

const { getClients,
  getClient,
  updateClient,
  createClient,
  deleteClient,} = require('../controllers/client');
const { check } = require('express-validator');
const {
  validateDate, validateNumber, validateProduct, validateFields
} = require('../middleware/validate-fields');




const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    detail:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: detail id
 *        description:
 *          type: Number
 *          description: description of a product
 *        product:
 *          type: Object
 *          description: product object
 *      required:
 *        - id
 *        - cant
 *      example:
 *         id: 6
 *         cant: 2
 *         product: []
 *
 */


/**
 * @swagger
 * /api/detail:
 *   get:
 *     summary: return all detail
 *     tags: [detail]
 *     responses:
 *      200:
 *        description: all detail!
 *        content:
 *          application/json:
 *            schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/detail'
 *
 */
router.get('/', [], getClients);

/**
 * @swagger
 * /api/detail/{id}:
 *   get:
 *     summary: return a detail
 *     tags: [detail]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the detail id
 *     responses:
 *      200:
 *        description: a detail!
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/detail'
 *
 *      404:
 *        description: detail not found
 *
 */
router.get('/:id', [], getClient);

/**
 * @swagger
 * /api/detail:
 *   post:
 *     summary: create a new detail
 *     tags: [detail]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/detail'
 *     responses:
 *      200:
 *        description: new detail created!
 */

router.post('/', [
  check('idNumber', 'idNumber is required').not().isEmpty(),
  check('name', 'name is required').notEmpty(),
  check('phone', 'phone is required').isNumeric(),
  check('email', 'email is required').not().isEmpty(),
  check('dateBirthday', 'dateBirthday is required').not().isEmpty(),
  check('address', 'address is required').not().isEmpty(),
  validateFields
], createClient);

/**
 * @swagger
 * /api/detail/{id}:
 *   put:
 *     summary: update a detail
 *     tags: [detail]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the detail id
 *     responses:
 *      200:
 *        description: detail update!
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/detail'
 *      404:
 *        description: detail not found
 *
 */
router.put('/:id', [], updateClient);


/**
 * @swagger
 * /api/detail/{id}:
 *   delete:
 *     summary: delete a detail
 *     tags: [detail]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the detail id
 *     responses:
 *      200:
 *        description: detail delete!
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/detail'
 *
 *      404:
 *        description: detail not found
 *
 */
router.delete('/:id', [], deleteClient);

module.exports = router;
