const express = require('express');
const router = express.Router();
const eventSubscriptionController = require('../controllers/eventsubscription.controller')


router.post('/create', (req, res) => {
    eventSubscriptionController.create(req, res)
})



module.exports = router;