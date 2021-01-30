const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.home);
router.post('/', mainController.result);

module.exports = router;