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
        { name: "css", count: 2},
        { name: "wordpress", count: 1},
        { name: "google", count: 1},
        { name: "psychology", count: 5},
        { name: "product", count: 2},
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
            name: 'Modern CSS Buttons',
            slug: 'modern-css-buttons',
        },
        {
            name: '12 Professional CSS Buttons',
            slug: 'css-buttons',
        }],
        "wordpress": [{
            name: 'How to Hide that You Use Wordpress',
            slug: 'how-to-hide-that-you-use-wordpress',
        }],
        "google": [{
            name: 'Google Web Designer First Impressions: Review',
            slug: 'google-web-designer-review',
        }],
        "psychology": [{
            name: 'WTF is Neuromarketing?',
            slug: 'neuromarketing',
        },{
            name: 'The Modern Guru',
            slug: 'gurus',
        },{
            name: 'Women are Outperforming Men - Data to Confirm',
            slug: 'gender-graduation',
        },{
            name: 'Habit Formation 101',
            slug: 'habits',
        },{
            name: 'Gendered Graffiti in a College Bathroom',
            slug: 'gendered-graffiti',
        }],
        "product": [{
            name: "Trends and Fads - Recognize the Difference or Die",
            slug: "fads",
        }, {
            name: "How to Use Market Segmentation and Discover Your Business' Core Identity",
            slug: "market-identity",
        }]
        
    };
    
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
} // globalRenaissance

exports.sitemap = function (req, res) {
    res.render('pages/sitemap', {
        title: "Sitemap",
    }); // render
} // globalRenaissance

exports.genderGrad = function (req, res) {
     var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on the academic success of women">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/genderTrouble', {
        title: "Women are Outperforming Men - Confirmation from Commencement Day",
        postTitle: "Women are Outperforming Men - Confirmation from Commencement Day",
        cats: getCats(),
        category: "psychology",
        callToAction: callToAction
    }); // render
} // genderGrad

exports.writeRoom = function (req, res) {
    res.render('pages/write', {
        title: "Online Write Room",
    }); // render
} // writeRoom

exports.habitFormation = function (req, res) {
    res.render('pages/habits'); // render
} // habitFormation

exports.globalRenaissanceAbout = function (req, res) {
    res.render('global-ren/about', {
        title: "Global Renaissance Project",
    }); // render
} // globalRenaissance About

// Show posts from category (Not necessrily about cats)
exports.showCatPosts = function (req, res) {
    var catPosts = req.catPosts;
    res.render('archive', {
        title: "Posts about " +
            capitaliseFirstLetter(req.category),
        catPosts: catPosts,
        category: capitaliseFirstLetter(req.category),
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

exports.marketSegment = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on discovering market identity">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/market-segmentation', {
        title: "How to use Market Segmentation and Discover Your Business' Core Identity",
        postTitle: "How to use Market Segmentation and Discover Your Business' Core Identity",
        cats: getCats(),
        category: "product dev.",
        callToAction: callToAction
    }); // render
};

exports.gurus = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on modern gurus">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/modern-guru', {
        title: "The Modern Guru",
        postTitle: "The Modern Guru",
        cats: getCats(),
        category: "psychology",
        callToAction: callToAction
    }); // render
};

exports.fadsTrends = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on fads vs trends">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/fads-trends', {
        title: "Trends and Fads - Recognize the Difference or Die",
        postTitle: "Trends and Fads - Recognize the Difference or Die",
        cats: getCats(),
        category: "product dev.",
        callToAction: callToAction
    }); // render
};
    
exports.neuromarketing = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on neuromarketing">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/wtfNeuromarketing', {
        title: "WTF is Neuromarketing?",
        postTitle: "WTF is Neuromarketing?",
        cats: getCats(),
        category: "psychology",
        callToAction: callToAction
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

exports.genderedGraffiti = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on gendered graffiti">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/gendered-graffiti', {
        title: "Stereotypically Gendered Graffiti in a College Bathroom",
        postTitle: "Collaborative and Depreciative: Gendered Graffiti in a College Bathroom",
        cats: getCats(),
        category: "psychology",
        callToAction: callToAction
    }); // render
};

exports.hideWordpress = function (req, res) {
    var callToAction = 'If you enjoyed this page or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your page on hiding Wordpress info">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/hide-wordpress', {
        title: "How to Hide that You Use Wordpress",
        postTitle: "How to Hide that You Use Wordpress",
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


function capitaliseFirstLetter(string)
{
    if (string === 'css') {
        return 'CSS';
    } else if (string == 'nodejs') {
        return 'Node.js';   
    } else if (string == 'product') {
        return 'Product Development';   
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}