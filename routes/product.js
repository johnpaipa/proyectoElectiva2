const { Router } = require('express');
const { getProduct } = require('../controllers/product');

const router = Router();

router.get('/', [], getProduct);

module.exports = router;
