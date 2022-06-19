const express = require('express');
const router = express.Router();
const eventRatingController = require('../controllers/eventrating.controller')


router.post('/create', (req, res) => {
    eventRatingController.create(req, res)
})



module.exports = router;