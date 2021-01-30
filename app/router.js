const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.test);
router.post('/', mainController.result);

module.exports = router;