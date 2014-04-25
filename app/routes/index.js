// Fields
var express = require('express');
var router = express.Router();

// Index
var index = require('../controllers/index');

// Parameters
//router.param('postSlug', index.post);
router.param('postCat', index.cat);

// Home Page
router.get('/', index.home);

// Specific posts (usually popular ones)
router.get('/css-buttons', index.css12);

// Other special things
// Rishan test
router.get('/rishan', index.rishan);
router.get('/viperchill-404', index.viperchill);
router.get('/valid-man', index.validMan);

// Qlock
router.get('/qlock', index.qlock);

// Single Posts
router.get('/php-vs-node', index.phpVsNode);
router.get('/cat/:postCat', index.showCatPosts);

module.exports = router;