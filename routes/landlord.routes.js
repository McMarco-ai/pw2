const express = require('express');
const router = express.Router();
const landlordController = require('../controllers/landlord.controller')


router.post('/create', (req, res) => {
    landlordController.create(req, res)
})

router.post('/login', (req, res) => {
    landlordController.login(req, res)
})


module.exports = router;