const express = require('express');
const { saveImage } = require('../controllers/imageController.js');

const router = express.Router();

router.post('/save', saveImage);

module.exports = router;
