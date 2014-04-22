// Fields
// Data fields
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Tag = mongoose.model('PostTag');

function getTags()
{
    var tagsRaw = Tag.find();
    
    for (var tag in tagsRaw) {
        console.log("Name : " + tag.name);
    }
    var tags = {};
    return tags;
}

exports.home = function (req, res) {
    // Render the home page
    tags = getTags();
    
    res.render('index', {
        title: "Graeme Boy - Home",
    }); // render
};

exports.rishan = function (req, res) {
    // Render the home page
    tags = getTags();
    
    res.render('rishan', {
        title: "Rishan Test Location and Device",
    }); // render
};

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

exports.showPost = function (req, res) {
    var post = req.post;
    res.render('post', {
        title: "Graeme Boy - Home",
        postTitle: post.title,
        postSlug: post.slug,
        postContent: post.body,
        postTags: post.tags,
    }); // render
} // show