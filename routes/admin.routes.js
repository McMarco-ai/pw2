const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')


router.post('/login', (req, res) => {
    adminController.login(req, res)
})

router.patch('/block/student', (req, res) => {
    adminController.blockstudent(req, res)
})

router.patch('/unblock/student', (req, res) => {
    adminController.unblockstudent(req, res)
})


module.exports = router;