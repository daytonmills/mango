const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline:  String,
    summary: String,
    url:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;