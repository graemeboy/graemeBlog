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

exports.home = function (req, res) {
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
            console.log(posts);
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
//        { name: "nodejs", count: 1},
    ];
    return cats;
}

exports.cat = function (req, res, next, catIn) {
    console.log("cat is " + catIn);

    var posts = Post.find({
        cat: catIn
    }, function (err, posts) {
        if (err) {
            return next(err)
        } else if (posts) {
            req.catPosts = posts;
            req.cat = catIn;
            return next();
        } else {
            // Nothing was found
            return next();
        }
    });
}; // .post
        
    exports.post = function (req, res, next, slugIn) {
    console.log("Slug is " + slugIn);

    var post = Post.findOne({
        slug: slugIn
    }, function (err, post) {
        if (err) {
            return next(err)
        } else if (post) {
            req.post = post;
            return next();
        } else {
            // Nothing was found
            return next();
        }
    });

    console.log(post);
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
        
exports.showPost = function (req, res) {
    var post = req.post;
    res.render('post', {
        title: "Graeme Boy - " + post.title,
        postTitle: post.title,
        postSlug: post.slug,
        postContent: post.body,
        postCat: post.cat,
        postTags: post.tags,
        cats: getCats()
    }); // render
} // show