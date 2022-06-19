const express = require('express');
const router = express.Router();
const housingCommentController = require('../controllers/housingcomment.controller')


router.post('/create', (req, res) => {
    housingCommentController.create(req, res)
})



module.exports = router;