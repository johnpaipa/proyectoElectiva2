
const { Router } = require('express');

const { getDetails,
    getDetail,
    updateDetail,
    createDetail,
    deleteDetail,} = require('../controllers/detail');




const router = Router();

router.get('/', [], getDetails);

router.get('/:id', [], getDetail);

router.post('/', [], createDetail);

router.put('/:id', [], updateDetail);

router.delete('/:id', [], deleteDetail);

module.exports = router;
