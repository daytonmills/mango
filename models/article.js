const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    name: String,
    desc: String,
    link: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;