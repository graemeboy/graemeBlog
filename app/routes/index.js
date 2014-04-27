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

// Single Posts
router.get('/php-vs-node', index.phpVsNode);
router.get('/cat/:postCat', index.showCatPosts);
router.get('/css-buttons', index.css12);
router.get('/google-web-designer-review', index.googleWebDesigner);
router.get('/how-to-hide-that-you-use-wordpress', index.hideWordpress);

// Pages
router.get('/cbt', index.cbt);
router.get('/qlock', index.qlock);


// Other special things
// Rishan test
router.get('/rishan', index.rishan);
router.get('/viperchill-404', index.viperchill);
router.get('/valid-man', index.validMan);






module.exports = router;