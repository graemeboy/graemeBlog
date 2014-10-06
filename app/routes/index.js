// Fields
var express = require('express');
var router = express.Router();

var Emitter = require('events').EventEmitter
    eventEmitter = new Emitter();

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

// Search
router.get('/search', function (req,res) {
	var q;
	if ((q = req.query.q) !== undefined && q !== '') {
		searchAPI.find(q);
		eventEmitter.on('searchComplete', function (relevantPosts) {
			res.render('search', {
				cats: getCats(),
				category: 'search',
				qPosts: relevantPosts,
				q: q
			});
			//res.end(JSON.stringify(relevantPosts));
		});
	} else {
		res.end("Please enter a real request for searching. Received an empty string.");
	}
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
	for (var i =0; i < posts.length; i++) {
		if (posts[i].cat === cat)
			appPosts[posts[i].slug] = posts[i].title;
	}
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
	for (var i =0; i < posts.length; i++) {
		cat = posts[i].cat;
		if (cats[cat] === undefined) {
			cats[cat] = 1;
		} else {
			cats[cat] += 1;
		}
	}
	return cats;
}

var postData = {};
// Add routes for each post
for (var i = 0; i < posts.length; i++) {
	var slug = posts[i].slug;
	postData[slug] = {
		'title': posts[i].title,
		'cat' : posts[i].cat
	};

	router.get('/' + slug, function (req, res) {
		var slug = req.url.slice(1),
			cat = postData[slug].cat,
			scripts = [],
			styles = [],
			inlineScripts = [];
		
		if (cat === 'coding') {
			scripts.push('http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/highlight.min.js');
			styles.push('http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/styles/default.min.css');
			inlineScripts.push('hljs.initHighlightingOnLoad();');
		}
		res.render('posts/' + slug, {
        	title: postData[slug].title,
        	category: cat,
        	cats: getCats(),
        	scripts: scripts,
        	styles: styles,
        	inlineScripts: inlineScripts
    	}); // render
	});
}

var searchAPI = require('./search-api');

router.get('/search-request', function (req, res) {

	// var postsArr = [];
	// for (post in posts) {
	// 	var obj = {
	// 		'slug': post,
	// 		'title': posts[post].title,
	// 		'cat': posts[post].cat,
	// 	}
	// 	postsArr.push(obj);
	// }
	// console.log(postsArr);
	// res.end("done");


	var q,relevantPosts;
	if ((q = req.query.q) !== undefined) {
		searchAPI.find(q);
		eventEmitter.on('searchComplete', function (relevantPosts) {
			res.end(JSON.stringify(relevantPosts));
		});
		
	} else {
		res.end('No query found.');
	}
});

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