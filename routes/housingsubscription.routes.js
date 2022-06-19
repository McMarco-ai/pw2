const express = require('express');
const router = express.Router();
const housingSubscriptionController = require('../controllers/housingsubscription.controller')


router.post('/create', (req, res) => {
    housingSubscriptionController.create(req, res)
})

router.post('/list', (req, res) => {
    housingSubscriptionController.list(req, res)
})

router.post('/approve', (req, res) => {
    housingSubscriptionController.approve(req, res)
})

router.post('/disapprove', (req, res) => {
    housingSubscriptionController.disapprove(req, res)
})




module.exports = router;