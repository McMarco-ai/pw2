const express = require('express');
const router = express.Router();
const housingRatingController = require('../controllers/housingrating.controller')


router.post('/create', (req, res) => {
    housingRatingController.create(req, res)
})



module.exports = router;