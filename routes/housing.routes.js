const express = require('express');
const router = express.Router();
const housingController = require('../controllers/housing.controller')


router.post('/create', (req, res) => {
    housingController.create(req, res)
})

router.get('/list', (req, res) => {
    housingController.list(req, res)
})



module.exports = router;