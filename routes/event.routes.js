const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller')


router.post('/create', (req, res) => {
    eventController.create(req, res)
})

router.get('/list', (req, res) => {
    eventController.list(req, res)
})



module.exports = router;