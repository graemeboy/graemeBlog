// Fields
var express = require('express');
var router = express.Router();



// Index
var index = require('../controllers/index');

// Parameters
router.param('postSlug', index.post);

// Home Page
router.get('/', index.home);

// Rishan test
router.get('/rishan', index.rishan);

// Admin area
var admin = require('../controllers/admin');
router.get('/admin', admin.dashboard);
router.get('/admin/login', admin.login);
router.post('/admin/login', admin.loginProcess);
router.get('/admin/write', admin.write);
router.post('/admin/write', admin.writeProcess);
router.get('/admin/write/:postSlug', admin.edit);

// Single Posts
router.get('/:postSlug', index.showPost);

module.exports = router;