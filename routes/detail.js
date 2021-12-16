
const { Router } = require('express');

const { getDetails,
    getDetail,
    updateDetail,
    createDetail,
    deleteDetail,
    calSubtotal,} = require('../controllers/detail');




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
router.get('/', [], getDetails);

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
router.get('/:id', [], getDetail);

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
router.post('/', [], createDetail);

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
router.put('/:idDetail', [], updateDetail);


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
router.delete('/:id', [], deleteDetail);
router.get('/calSubtotal/:id', calSubtotal);

module.exports = router;
