const express = require('express');
const router = express.Router();
const housingTypeController = require('../controllers/housingtype.controller')


router.post('/create', (req, res) => {
    housingTypeController.create(req, res)
})

router.get('/list', (req, res) => {
    housingTypeController.list(req, res)
})




module.exports = router;