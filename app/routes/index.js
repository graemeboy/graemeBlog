// Fields
var express = require('express');
var router = express.Router();

// Index
var index = require('../controllers/index');
router.get('/', index.home);

// Hello
router.get('/hello', index.hello);

module.exports = router;