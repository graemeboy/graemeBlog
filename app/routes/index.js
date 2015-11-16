var express = require('express');
var router = express.Router();
var Emitter = require('events').EventEmitter;
var searchAPI = require('./search-api');
var index = require('../controllers/index');

posts = require('../models/post.js').allPosts;
eventEmitter = new Emitter();

router.use(function(req, res, next) {
   if (req.url.substr(-1) == '/' && req.url.length > 1) {
   	res.redirect(301, req.url.slice(0, -1));
   } else {
   	next();
   }
});

// Home Page
router.get('/', function (req, res) {
	res.render('index', {
        title: "Graeme Boy",
        cats: index.getCats(),
        numPosts: index.getNumPosts()
    });
});

// Search
router.get('/search', function (req,res) {
	var q;
	if ((q = req.query.q) !== undefined && q !== '') {
		searchAPI.find(q);

		eventEmitter.on('searchComplete', function (relevantPosts) {
			res.render('search', {
				cats: index.getCats(),
				category: 'search',
				qPosts: relevantPosts,
				q: q
			});
		});
	} else {
		res.end("Please enter a real request for searching. " + 
		        "Received an empty string.");
	}
});

// Search Request
router.get('/search-request', function (req, res) {
	var q;
	var relevantPosts;

	if (q = req.query.q) {
		searchAPI.find(q);
		eventEmitter.on('searchComplete', function (relevantPosts) {
			res.end(JSON.stringify(relevantPosts));
		});
	} else {
		res.end('No query found.');
	}
});

// A list of all posts
router.get('/all-posts', function (req, res) {
	res.render('all-posts', {
		title: 'Posts from All Categories',
		posts: posts,
		cats: index.getCats(),
		category: 'all',
	});
});

// Index of Category Archive
router.param('postCat', function (req, res, next, catIn) {
    req.catPosts = index.getCategoryPosts(catIn);
    req.category = catIn;
    return next();
});

// Category Archive
router.get('/cat/:postCat', function (req, res) {
    res.render('archive', {
        title: "Articles on " + index.capitalizeFirstLetter(req.category),
        catPosts: req.catPosts,
        category: req.category,
        cats: index.getCats(),
        tags: index.getTags(req.category)
    });
});

router.get('/about', function (req, res) {
	res.render('pages/about', {
        cats: index.getCats(),
        title: "About Graeme Boy",
        category: "none"
    });
});

router.get('/ocean-voyages', index.oceanVoyages);
router.get('/ocean-voyages-sum', index.oceanVoyagesSum);
router.get('/cbt', index.cbt);
router.get('/portfolio', index.portfolio);
router.get('/trawalter', index.trawalter);
router.get('/valid-man', index.validMan);

// Add routes for each post
(function addRoutes() {
	var postData = {};
	var slug;
	var tags;
	
	posts.forEach(function(post) {
		slug = post.slug;
		
		if (!(tags = post.tags)) {
			tags = [];
		}

		postData[slug] = {
			'title': post.title,
			'cat' : post.cat,
			'tags': tags
		};

		router.get('/' + slug, function (req, res) {
			var givenSlug = req.url.slice(1);
			var cat = postData[givenSlug].cat;
			var scripts = [];
			var styles = [];
			var inlineScripts = [];
			
			if (cat === 'coding') {
				scripts.push('http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/highlight.min.js');
				styles.push('http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.2/styles/default.min.css');
				inlineScripts.push('hljs.initHighlightingOnLoad();');
			}

			res.render('posts/' + givenSlug, {
	        	title: postData[givenSlug].title,
	        	category: cat,
	        	cats: index.getCats(),
	        	scripts: scripts,
	        	styles: styles,
	        	inlineScripts: inlineScripts,
	        	tags: postData[givenSlug].tags
	    	});
		});
	});
}());

module.exports = router;