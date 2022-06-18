const express = require('express');
const router = express.Router();
const housingTypeController = require('../controllers/housingtype.controller')


router.post('/create', (req, res) => {
    housingTypeController.create(req, res)
})



module.exports = router;