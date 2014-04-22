// Admin controllers 

// Fields
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Tag = mongoose.model('PostTag');

exports.dashboard = function (req, res) {
    // Render the home page
    res.render('admin/index', {
        title: "Graeme Boy - Home",
    }); // render
}; // dashboard

// Log in
exports.login = function (req, res) {
    res.render('admin/login', {
        title: "Sign in to graemeboy.com",
    }); // render
} // login

// Log in processing
exports.loginProcess = function (req, res) {
    if (req.body.username == "graeme" &&
        req.body.password == "graeme") {

        res.redirect('/admin');
    } else {
        res.redirect('/admin/login');
    }
} // loginProcess

// Write post
exports.write = function (req, res) {
    // Check if there is a session
    res.render('admin/write', {
        title: 'Write a post on graemeboy.com',
        editTitle: '',
        editSlug: '',
        editCat: '',
        editContent: '',
    }); // render
} // write

// Write post processing
exports.writeProcess = function (req, res) {

    var tags = req.body.postTags.split(',');
    var slug = req.body.postSlug;
    
    var post = new Post({
        title: req.body.postTitle,
        body: req.body.postBody,
        slug: slug,
        tags: tags,
        cat: req.body.postCat
    });
    
    console.log("New post: " + post);
    // Save the Post
    post.save(function (err) {
        if (err) {
            console.log(err);
        } // if
        else {
            console.log("Finished saving post");
            res.redirect('/admin/write/' + slug);
        } // else
    }); // post save

    // Save the tags
//    var tagFind;
//    var tagPosts;
//    var tagNew;
//    var tagTrim;
//    // Go through each tag and append it to array.
//
//    iterateTags(0);

} // writeProcess

//function iterateTags(i, tagModel, tag, slug)
//{
//    if (i == tags.length) {
//        // Base case
//        res.redirect('/admin');
//    } else {
//        iterateTags();
//        tagTrim = tags[i].trim();
//        console.log("Tag: " + tagTrim);
//        tagFind = null;
//        tagFind = Tag.findOne({
//            tag: tagTrim,
//        },
//        function (err, tag) {
//            if (err) {
//                console.log(err);
//            } else if (tag) {
//                updateTag(tag, tagTrim, slug, iterateTags);
//            } else {
//                insertTag(tagTrim, slug, iterateTags);
//            } // else
//        }); // function
//    } // else
//} // iterateTags


//function updateTag(tagModel, tag, slug, i) {
//    // Update this tag
//    tagPosts = tagModel.posts;
//    if (tagPosts.indexOf(slug < 0)) {
//        tagPosts.push(slug);
//    } // if
//    console.log("Updating tag: " + tag);
//    tagModel.save({
//        _id: tagModel['_id'],
//        tag: tag,
//        posts: tagPosts
//    }, {
//        w: 1
//    });
//    
//    callback();
//} // updateTag

//function insertTag(tag, slug, callback) {
//    // Insert the tag
//    tagNew = new Tag({
//        tag: tag,
//        posts: [slug]
//    });
//    console.log("Inserting tag: " + tagNew);
//    tagNew.save(function (err) {
//        if (err) {
//            console.log(err);
//        } // if
//    }); // post save
//    
//    callback();
//} // insertTag

// Editing posts
exports.edit = function (req, res) {
    // Check if there is a session
    var post = req.post;

    res.render('admin/write', {
        title: "Write a post on graemeboy.com",
        editTitle: post.title,
        editSlug: post.slug,
        editTags: post.tags.join(','),
        editCat: post.cat,
        editContent: post.body,
    }); // render
}