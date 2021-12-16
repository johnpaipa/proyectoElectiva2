const { Router } = require('express');
const {
  getBill,
  getBills,
  deleteBill,
  createBill,
  updateBill,
  calcTotal
} = require('../controllers/bill');
const { check } = require('express-validator');
const { validateFields } = require('../middleware/validate-fields');

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    bill:
 *      type: object
 *      properties:
 *        number:
 *          type: string
 *          description: bill number
 *        dateBill:
 *          type: string
 *          description: bill date
 *        typePay:
 *          type: boolean
 *          description: type pay
 *        details:
 *          type: Object
 *          description: details object
 *      required:
 *        - number
 *        - dateBill
 *        - typePay
 *      example:
 *         number: 6
 *         dateBill: 2021-12-02T05:00:00.000Z
 *         typePay: false
 *         details: []
 *
 */

/**
 * @swagger
 * /api/bill:
 *   get:
 *     summary: return all bill
 *     tags: [bill]
 *     responses:
 *      200:
 *        description: all bill!
 *        content:
 *          application/json:
 *            schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/bill'
 *
 */
router.get('/', [], getBills);


/**
 * @swagger
 * /api/bill/{id}:
 *   get:
 *     summary: return a bill
 *     tags: [bill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the bill id
 *     responses:
 *      200:
 *        description: a bill
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/bill'
 *
 *      404:
 *        description: bill not found
 *
 */
router.get('/:id', [], getBill);


/**
 * @swagger
 * /api/bill:
 *   post:
 *     summary: create a new bill
 *     tags: [bill]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/bill'
 *     responses:
 *      200:
 *        description: new bill created!
 */
router.post('/', [
  check('numberBill', 'numberBill is required').not().isEmpty(),
  check('dateBill', 'dateBill should be Boolean').not().isEmpty(),
  check('typePay', 'typePay is required it should be Boolean').isBoolean(),
  validateFields
], createBill);


/**
 * @swagger
 * /api/bill/{id}:
 *   put:
 *     summary: update a bill
 *     tags: [bill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the bill id
 *     responses:
 *      200:
 *        description: bill update!
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/bill'
 *      404:
 *        description: bill not found
 *
 */
router.put('/:id', [], updateBill);


/**
 * @swagger
 * /api/bill/{id}:
 *   delete:
 *     summary: delete a bill
 *     tags: [bill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the bill id
 *     responses:
 *      200:
 *        description: bill delete!
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               $ref: '#/components/schemas/bill'
 *
 *      404:
 *        description: bill not found
 *
 */
router.delete('/:id', [], deleteBill);
router.get('/calcTotal/:id', calcTotal);

module.exports = router;
