// Fields
var express = require('express');
var router = express.Router();

// Index
var index = require('../controllers/index');

// Home Page
router.get('/', function (req, res) {

	res.render('index', {
        title: "Graeme Boy",
        cats: getCats(),
        numPosts: getNumPosts()
    }); // render

});

function getNumPosts () {
	return Object.keys(posts).length;
}

// Load all of the post data
posts = require('./posts.js').posts;

/*
	Category Archive
 */
router.param('postCat', function (req, res, next, catIn) {
    req.catPosts = getCategoryPosts(catIn);
    req.category = catIn;
    return next();
}); // .cat

router.get('/cat/:postCat', function (req, res) {
	var catPosts = req.catPosts;
    res.render('archive', {
        title: "Posts about " + req.category,
        catPosts: catPosts,
        category: req.category,
        cats: getCats()
    });
});

/**
 * getCategoryPosts
 * Loops through all posts and returns those that have a given category
 */
function getCategoryPosts(cat) {
	appPosts = {}; // appropriate posts
	for (post in posts)
		if (posts[post].cat === cat)
			appPosts[post] = posts[post].title;
	return appPosts;
}

/**
 * capitalizeFirstLetter
 * Takes in a string, and depending on type returns capitalize.
 */
function capitalizeCat(stringIn) {
    return stringIn.charAt(0).toUpperCase() + stringIn.slice(1);
}

/**
 * getCats
 * @return an array of unique categories
 */
function getCats () {
	var cats = {},
		cat;
	for (slug in posts) {
		cat = posts[slug].cat;
		if (cats[cat] === undefined) {
			cats[cat] = 1;
		} else {
			cats[cat] += 1;
		}
	}
	return cats;
}

// Add routes for each post
for (slug in posts) {
	router.get('/' + slug, function (req, res) {
		slug = req.url.slice(1);
		var cat = posts[slug].cat;
		var scripts = [],
			styles = [];
		if (cat === 'coding') {
			//scripts.push('/js/prism.coy.min.js');
			//styles.push('/css/prism.coy.min.css');
		}
		res.render('posts/' + slug, {
        	title: posts[slug].title,
        	category: cat,
        	cats: getCats(),
        	scripts: scripts,
        	styles: styles
    	}); // render
	});
}



router.get('/about', index.about);
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