const express = require('express');
const router = express.Router();
const eventTypeController = require('../controllers/eventtype.controller')


router.post('/create', (req, res) => {
    eventTypeController.create(req, res)
})



module.exports = router;