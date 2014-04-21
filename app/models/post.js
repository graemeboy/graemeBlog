var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PostSchema = new Schema({
    title: { type: String, default: '' },
    body: { type: String, default: '' },
});

mongoose.model("Post", PostSchema);