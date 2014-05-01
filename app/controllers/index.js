// Fields

exports.viperchill = function (req, res)
{
    res.render('viperchill/index', {
        title: "Rishan Test Location and Device",
    }); // render
}

exports.home = function (req, res, next) {
    // Decide what to do here
    res.render('index', {
        title: "Graeme Boy",
        cats: getCats()
    }); // render
    
}; // .home



exports.modernCSSButtons = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on modern CSS buttons">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/modern-buttons', {
        title: "Modern CSS Buttons",
        postTitle: "Modern CSS Buttons",
        cats: getCats(),
        callToAction: callToAction,
        category: "css",
    }); // render
};


exports.rishan = function (req, res) {
    // Render the home page
    res.render('rishan', {
        title: "Rishan Test Location and Device",
    }); // render
};

exports.validMan = function (req, res) {
    // Render the home page
    res.render('validMan', {
        title: "Show a validation man",
    }); // render
};

function getCats ()
{
    var cats = [
        { name: "nodejs", count: 1},
        { name: "css", count: 1},
        { name: "wordpress", count: 1},
        { name: "google", count: 1},
        { name: "psychology", count: 0},
    ];
    return cats;
} // getCat()
        
function getCategoryPosts (catIn)
{
    var cats = { 
        "nodejs": [{
            name: 'PHP vs Node.js',
            slug: 'php-vs-node',
        }],
        "css": [{
            name: '12 Professional CSS Buttons',
            slug: 'css-buttons',
        }],
        "wordpress": [{
            name: 'How to Hide That You Use Wordpress',
            slug: 'how-to-hide-that-you-use-wordpress',
        }],
        "google": [{
            name: 'Google Web Designer First Impressions: Review',
            slug: 'google-web-designer-review',
        }],
        "psychology": []};
    
    return cats[catIn];
}

exports.cat = function (req, res, next, catIn) {
    var posts = getCategoryPosts(catIn);
    req.catPosts = posts;
    req.category = catIn;
    return next();
}; // .cat
        
exports.post = function (req, res, next, slugIn) {

    var post = Post.findOne({
        slug: slugIn
    }, function (err, post) {
        if (err) {
            return next(err);
        } else if (post) {
            req.post = post;
            return next();
        } else {
            // Nothing was found
            res.status(404).render('404', {
                url: req.originalUrl,
                title: "404 - Page not found",
                error: 'Page not found'
            });
        }
    });
}; // .post

exports.globalRenaissance = function (req, res) {
    res.render('global-ren/index', {
        title: "Global Renaissance Project",
    }); // render
}

exports.globalRenaissanceAbout = function (req, res) {
    res.render('global-ren/about', {
        title: "Global Renaissance Project",
    }); // render
}

// Show posts from category (Not necessrily about cats)
exports.showCatPosts = function (req, res) {
    var catPosts = req.catPosts;
    res.render('archive', {
        title: "Graeme Boy - " + req.cat,
        catPosts: catPosts,
        category: req.category,
        cats: getCats()
    }); // render
} // show

// Specific posts

exports.css12 = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on CSS buttons">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/css12', {
        title: "12 Professional CSS Buttons",
        postTitle: "12 Professional CSS Buttons",
        cats: getCats(),
        callToAction: callToAction,
        category: "css",
    }); // render
};

exports.phpVsNode = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on PHP vs Node.js">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/php-vs-node', {
        title: "PHP vs Node.js",
        postTitle: "PHP vs Node.js",
        cats: getCats(),
        category: "nodejs",
        callToAction: callToAction
    }); // render
};

exports.hideWordpress = function (req, res) {
    var callToAction = 'If you enjoyed this page or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your page on hiding Wordpress info">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/hide-wordpress', {
        title: "How to Hide That You Use Wordpress",
        postTitle: "How to Hide That You Use Wordpress",
        callToAction: callToAction,
        cats: getCats(),
        category: "wordpress",
    }); // render
};


exports.cbt = function (req, res) {
    var callToAction = 'If you enjoyed this page or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just used your cbt app">send me a tweet.</a>';
    
    // Render the custom page
    res.render('pages/cbt', {
        title: "Cognitive Behavioral Therapy - Self-Help App",
        postTitle: "Cognitive Behavioral Therapy - Self-Help App",
        callToAction: callToAction
    }); // render
};

exports.googleWebDesigner = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on the Google Web Designer">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/google-web-designer', {
        title: "Google Web Designer First Impressions: Review",
        postTitle: "Google Web Designer First Impressions: Review",
        cats: getCats(),
        category: "google",
        callToAction: callToAction
    }); // render
};



exports.showPost = function (req, res) {
    var post = req.post;
    
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on ' + post.cat + '">send me a tweet.</a>';
    
    res.render('post', {
        title: post.title,
        postTitle: post.title,
        postSlug: post.slug,
        postContent: post.body,
        postCat: post.cat,
        postTags: post.tags,
        cats: getCats(),
        callToAction: callToAction
    }); // render
} // show

// Qlock
exports.qlock = function (req, res) {
    res.render('qlock/qlock'); // render
} // show