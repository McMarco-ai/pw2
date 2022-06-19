const express = require('express');
const router = express.Router();
const eventCommentController = require('../controllers/eventcomment.controller')


router.post('/create', (req, res) => {
    eventCommentController.create(req, res)
})



module.exports = router;