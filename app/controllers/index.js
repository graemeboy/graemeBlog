var helper = require('../helpers/index');

/**
 * getCategoryPosts
 * Loops through all posts and returns those that have a given category
 */
exports.getCategoryPosts = function(cat) {
    return posts.filter(function (post) {
        return (post.cat === cat);
    });
};

/**
 * capitalizeFirstLetter
 * Takes in a string, and depending on type returns capitalize.
 */
exports.capitalizeFirstLetter = function(stringIn) {
    return stringIn.charAt(0).toUpperCase() + stringIn.slice(1);
};

/**
 * Returns an array of tags for a given category
 */
exports.getTags = function(category) {
    var tags = [];
    var tagArr;

    posts.forEach(function(post){
        if (post.cat === category) {
            tagArr = post.tags;

            tagArr.forEach(function(tag) {
                if (tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            });
        }
    });

    return tags;
};

/**
 * getCats
 * @return an array of unique categories
 */
exports.getCats = function () {
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

exports.getNumPosts = function () {
    return Object.keys(posts).length;
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


exports.nodeUDP = function (req, res) {
    
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
    var catTitle = helper.capitaliseFirstLetter(req.category);

    res.render('archive', {
        title: "Posts about " + catTitle,
        catPosts: catPosts,
        category: catTitle,
        cats: getCats()
    });
};

// Specific posts
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


    
exports.nutsBolts = function (req, res) {
    var callToAction = 'If you enjoyed this post, or can help me improve it, please <a href="http://twitter.com/share?text=Hey @graeme_boy, I just read your post on the nuts and bolts problem">send me a tweet.</a>';
    
    // Render the custom page
    res.render('posts/nutsBolts', {
        title: "The Matching Nuts and Bolts Problem (An Approach)",
        postTitle: "The Matching Nuts and Bolts Problem (An Approach)",
        cats: getCats(),
        category: "coding",
        callToAction: callToAction
    }); // render
};


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
    });
};