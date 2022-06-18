const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller')


router.post('/create', (req, res) => {
    studentController.create(req, res)
})

router.post('/login', (req, res) => {
    studentController.login(req, res)
})


module.exports = router;