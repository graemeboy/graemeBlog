// Fields
var express = require('express');
var router = express.Router();



// Index
var index = require('../controllers/index');

// Parameters
router.param('postSlug', index.post);
router.param('postCat', index.cat);

// Home Page
router.get('/', index.home);



// Admin area
var admin = require('../controllers/admin');
router.get('/admin', admin.dashboard);
router.get('/admin/login', admin.login);
router.post('/admin/login', admin.loginProcess);
router.get('/admin/write', admin.write);
router.post('/admin/write', admin.writeProcess);
router.get('/admin/write/:postSlug', admin.edit);

// Other special things
// Rishan test
router.get('/rishan', index.rishan);
router.get('/viperchill-404', index.viperchill);

// Qlock
router.get('/qlock', index.qlock);

// Single Posts
router.get('/:postSlug', index.showPost);
router.get('/cat/:postCat', index.showCatPosts);

module.exports = router;