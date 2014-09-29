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
router.get('/how-to-hide-that-you-use-wordpress', index.hideWordpress);
router.get('/php-vs-node', index.phpVsNode);
router.get('/gender-graduation', index.genderGrad);
router.get('/modern-css-buttons', index.modernCSSButtons);
router.get('/google-web-designer-review', index.googleWebDesigner);
router.get('/gendered-graffiti', index.genderedGraffiti);
router.get('/habits', index.habitFormation);
router.get('/write-room', index.writeRoom);
router.get('/cat/:postCat', index.showCatPosts);
router.get('/css-buttons', index.css12);
router.get('/market-identity', index.marketSegment);
router.get('/fads', index.fadsTrends);
router.get('/gurus', index.gurus);
router.get('/neuromarketing', index.neuromarketing);
router.get('/wordpress-plugins', index.tipsWPPlugins);
router.get('/logout-button-css', index.logoutButton);
router.get('/php-good', index.phpGood);
router.get('/software-cliche', index.softwareCliche);
router.get('/entertainment-luxury', index.entertainmentLuxury);
router.get('/frontend-crawler', index.frontendCrawler);

// Pages
router.get('/ocean-voyages', index.oceanVoyages);
router.get('/ocean-voyages-sum', index.oceanVoyagesSum);
router.get('/global-renaissance', index.globalRenaissance);
router.get('/global-renaissance/about', index.globalRenaissanceAbout);
router.get('/cbt', index.cbt);
router.get('/opa', index.opa);
router.get('/qlock', index.qlock);
router.get('/portfolio', index.portfolio);
router.get('/trawalter', index.trawalter);

router.get('/sitemap', index.sitemap);

// Other special things
// Rishan test
router.get('/rishan', index.rishan);
router.get('/viperchill-404', index.viperchill);
router.get('/valid-man', index.validMan);

module.exports = router;