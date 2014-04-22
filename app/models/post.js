// Models for Posts
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    slug: { type: String, default: '' },
    tags: { type: Array, default: [] },
});

mongoose.model("Post", PostSchema);

var TagSchema = new Schema({
    tag: { type: String, default: '' },
    posts: { type: Array, default: [] },
});

mongoose.model("PostTag", TagSchema);