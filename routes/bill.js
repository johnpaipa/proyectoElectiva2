const { Router } = require('express');
const {
  getBill,
  getBills,
  deleteBill,
  createBill,
  updateBill
} = require('../controllers/bill');
const { check } = require('express-validator');

const router = Router();

router.get('/', [], getBills);

router.get('/:id', [], getBill);

router.post('/', [
  check('number', 'number is required').not().isEmpty(),
  check('dateBill', 'dateBill is required').not().isEmpty(),
  check('typePay', 'typePay is required').notEmpty(),
  check('details', 'details is not valid').isMongoId(),
], createBill);

router.put('/:id', [], updateBill);

router.delete('/:id', [], deleteBill);

module.exports = router;
