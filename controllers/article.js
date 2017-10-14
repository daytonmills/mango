const cheerio = require('cheerio');
const request = require('request');
const Article = require('../models/article.js');

var exports = module.exports = {}

exports.landing = (req, res) =>
{
    Article.find({}, (err, doc) =>
    {
        if(err) throw err;
        var articles = { article: doc }
        res.render('index', articles);
    });
}

exports.saved = (req, res) =>
{
   Article.find({ mark: 'true'}, (err, doc) =>
   {
       if(err) throw err;
       var articles = { article: doc }
       res.render('saved', articles);
   });
}

exports.save = (req, res) =>
{
    Article.findOne({ _id: req.params.id }, (err, doc) =>
    {
        doc.mark = true;
        doc.save();
    });
    res.redirect("/");
}

exports.unsave = (req, res) =>
{
    Article.findOne({ _id: req.params.id }, (err, doc) =>
    {
        doc.mark = false;
        doc.save();
    });
    res.redirect("/saved");
}