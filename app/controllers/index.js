// Fields
// Data fields
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
//var Tag = mongoose.model('PostTag');

//function getTags()
//{
//    var tagsRaw = Tag.find();
//    
//    for (var tag in tagsRaw) {
//        console.log("Name : " + tag.name);
//    }
//    var tags = {};
//    return tags;
//}

exports.viperchill = function (req, res)
{
    res.render('viperchill/index', {
        title: "Rishan Test Location and Device",
    }); // render
}

exports.home = function (req, res, next) {
    // Get the recent posts
//    Post.remove({}, function(err) { 
//   console.log('collection removed') 
//});
//    Tag.remove({}, function(err) { 
//   console.log('collection removed') 
//});
    Post.find({}).
        limit(5)
        .exec(function (err, posts) {
        if (err) {
            return next(err)
        } else{
            // Render page
            res.render('index', {
                title: "Graeme Boy - Home",
                recentPosts: posts
            }); // render
        }
    });
    
    
}; // .home

exports.rishan = function (req, res) {
    // Render the home page
    res.render('rishan', {
        title: "Rishan Test Location and Device",
    }); // render
};

function getRecentPosts()
{
    
}

function getCats ()
{
    var cats = [
        { name: "nodejs", count: 1},
    ];
    return cats;
} // getCat()

exports.cat = function (req, res, next, catIn) {

    var posts = Post.find({
        cat: catIn
    }, function (err, posts) {
        if (err) {
            return next(err);
        } else if (posts) {
            req.catPosts = posts;
            req.cat = catIn;
            return next();
        } else {
            // Nothing was found
            return next();
        }
    });
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

        
// Show posts from category (Not necessrily about cats)
exports.showCatPosts = function (req, res) {
    var catPosts = req.catPosts;
    res.render('archive', {
        title: "Graeme Boy - " + req.cat,
        catPosts: catPosts,
        cat: req.cat,
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