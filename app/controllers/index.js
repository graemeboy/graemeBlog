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

exports.frontendCrawler = function (req, res)  {
    var callToAction = 'Once you\'ve read this post, let me know by <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on building a frontend web crawler">sending me a tweet</a>';
    
    // Render the custom page
    res.render('posts/frontendCrawler.ejs', {
        title: "How to Build a Frontend Web Crawler",
        postTitle: "How to Build a Frontend Web Crawler",
        cats: getCats(),
        callToAction: callToAction,
        category: "coding",
    }); // render
}

exports.nodeFS = function (req, res) {
    var callToAction = 'Once you\'ve read this post, let me know by <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on using the #nodejs fs module">sending me a tweet</a>';
    res.render('posts/nodeFS.ejs', {
        title: "Using The Node.js FS Module",
        postTitle: "Using The Node.js FS Module",
        cats: getCats(),
        callToAction: callToAction,
        category: "coding",
    }); // render
}

exports.smutsLegacy = function (req, res)  {
    var callToAction = 'Once you\'ve read this post, let me know by <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on the Jan Smuts legacy in South Africa">sending me a tweet</a>';
    
    // Render the custom page
    res.render('posts/smutsLegacy.ejs', {
        title: "The Legacy of Jan Smuts in South Africa",
        postTitle: "The Legacy of Jan Smuts in South Africa",
        cats: getCats(),
        callToAction: callToAction,
        category: "travel",
    }); // render
}

exports.entertainmentLuxury = function (req, res) {
    var callToAction = 'Once you\'ve read this post, let me know by <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on entertainment not being a luxury">sending me a tweet</a>';
    
    // Render the custom page
    res.render('posts/entertainment-not-luxury.ejs', {
        title: "Entertainment is Not a Luxury",
        postTitle: "Entertainment is Not a Luxury",
        cats: getCats(),
        callToAction: callToAction,
        category: "travel",
    }); // render
};

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

exports.opa = function (req, res) {
    // Render the home page
    res.render('pages/opa', {
        title: "OPA Planner",
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
        { name: "coding", count: 9},
        { name: "psychology", count: 5},
        { name: "product", count: 3},
        { name: "travel", count: 2}
    ];
    return cats;
} // getCat()
        
function getCategoryPosts (catIn)
{
    var cats = { 
        "coding": [{
            name: "Using the Node.js FS Module",
            slug: "node-fs"
        },{
            name: "How to Build a Frontend Web Craler",
            slug: "frontend-crawler"
        },{
            name: 'PHP vs Node.js',
            slug: 'php-vs-node',
        },{
            name: 'PHP is a Good Language',
            slug: 'php-good',
        }, {
            name: 'Logout Buttons with CSS',
            slug: 'logout-button-css',
        },{
            name: 'Modern CSS Buttons',
            slug: 'modern-css-buttons',
        },{
            name: '12 Professional CSS Buttons',
            slug: 'css-buttons',
        },{
            name: '6 Tips for Building Premium Wordpress Plugins',
            slug: 'wordpress-plugins',
        },{
            name: 'How to Hide that You Use Wordpress',
            slug: 'how-to-hide-that-you-use-wordpress',
        }],
        "psychology": [ {
            name: "Attending to Threat: Race-based Patterns of Selective Attention",
            slug: "trawalter"
        },{
            name: 'What is Neuromarketing?',
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
            name: "Design Pattern or Cliché?",
            slug: "software-cliche",
        },{
            name: "Trends and Fads - Recognize the Difference or Die",
            slug: "fads",
        }, {
            name: "How to Use Market Segmentation and Discover Your Business' Core Identity",
            slug: "market-identity",
        },
        {
            name: 'Google Web Designer First Impressions: Review',
            slug: 'google-web-designer-review',
        }],
        "travel": [{
            name: "The Legacy of Jan Smuts in South Africa",
            slug: "jan-smuts-legacy"
        },{
            name: "Entertainment is Not a Luxury",
            slug: "entertainment-luxury"
        }]
    };
    
    return cats[catIn];
}

exports.about = function (req, res) {
    res.render('pages/about', {
        cats: getCats(),
        category: ""
    });
}

exports.portfolio = function (req, res) {
    res.render('pages/portfolio', {
        title: "Portfolio",
    });
}

exports.cat = function (req, res, next, catIn) {
    var posts = getCategoryPosts(catIn);
    req.catPosts = posts;
    req.category = catIn;
    return next();
}; // .cat

exports.trawalter = function (req, res) {
    res.render('pages/trawalter/index');
}
        
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

exports.oceanVoyages = function (req, res) {
    res.render('pages/ocean-voyages', {
        title: "Ocean Voyages",
    }); // render
} // oceanVoyages

exports.oceanVoyagesSum = function (req, res) {
    res.render('pages/ocean-voyages-sum', {
        title: "Ocean Voyages Sum",
    }); // render
} // oceanVoyagesSum

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

exports.tipsWPPlugins = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on 6 tips for building WP plugins">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/tips-wp-plugins', {
        title: "6 Tips for Building Premium Wordpress Plugins",
        postTitle: "6 Tips for Building Premium Wordpress Plugins",
        cats: getCats(),
        category: "wordpress",
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

exports.phpGood = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on why PHP is a good language">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/php-good', {
        title: "PHP is a Good Language",
        postTitle: "PHP is a Good Language",
        cats: getCats(),
        category: "php",
        callToAction: callToAction
    }); // render
}
    
exports.logoutButton = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post with logout buttons">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/logout-button-css', {
        title: "Logout Buttons with CSS",
        postTitle: "Logout Buttons with CSS",
        cats: getCats(),
        category: "css",
        callToAction: callToAction
    }); // render
};

exports.softwareCliche = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on software cliches">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/softwareCliche', {
        title: "Design Pattern or Cliché?",
        postTitle: "Design Pattern or Cliché?",
        cats: getCats(),
        category: "product",
        callToAction: callToAction
    }); // render
    
}

exports.neuromarketing = function (req, res) {
    var callToAction = 'If you enjoyed this post or have something to say about it, <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on neuromarketing">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/wtfNeuromarketing', {
        title: "What is Neuromarketing?",
        postTitle: "What is Neuromarketing?",
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
    var callToAction = 'Once you\'ve read this post, let me know by <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on hiding #Wordpress info">sending me a tweet</a>, or connecting with me on <a href="http://www.linkedin.com/profile/view?id=78694591" title="Visit Graeme\'s LinkedIn Profile">LinkedIn</a>.';
    
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