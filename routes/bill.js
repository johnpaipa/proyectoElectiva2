const { Router } = require('express');
const {
  getBill,
  getBills,
  deleteBill,
  createBill,
  updateBill
} = require('../controllers/bill');

const router = Router();

router.get('/', [], getBills);

router.get('/:id', [], getBill);

router.post('/', [], createBill);

router.put('/:id', [], updateBill);

router.delete('/:id', [], deleteBill);

module.exports = router;
