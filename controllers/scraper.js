const cheerio = require('cheerio');
const request = require('request');
const Article = require('../models/article.js');

var exports = module.exports = {}

exports.scrape = (req, res) =>
{
    request('https://techcrunch.com/', (error, response, html) =>
    {
        const $ = cheerio.load(html);
        let entry = {};

        $('.block-content').each((i, element) =>
        {
            entry.thum = $(element).children('span').children('a').children('img').attr('src');
            entry.link = $(element).children('.post-title').children().attr('href');
            entry.name = $(element).children('.post-title').children().text();
            entry.desc = $(element).children('.excerpt').text();
            entry.mark = false;

            let article = new Article(entry);
            article.save((err, doc) => { if (err) throw err });
        });
        res.redirect('/');
    });
}