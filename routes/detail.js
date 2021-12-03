const { Router } = require('express');
const { getDetail } = require('../controllers/detail');

const router = Router();

router.get('/', [], getDetail);

module.exports = router;
