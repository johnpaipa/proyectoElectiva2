const { Router } = require('express');
const { getBill } = require('../controllers/bill');

const router = Router();

router.get('/', [], getBill);

module.exports = router;
