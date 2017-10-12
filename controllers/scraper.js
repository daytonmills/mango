const cheerio = require("cheerio");
const request = require("request");

var exports = module.exports = {}

exports.landing = (req, res) =>
{
    request("https://techcrunch.com/", (error, response, html) =>
    {
        var $ = cheerio.load(html);
        var results = [];

        $("h2.post-title").each(function(i, element) {

            var link = $(element).children().attr("href");
            var title = $(element).children().text();

            results.push({
                title: title,
                link: link
            });
      });
      res.json(results);
    });
}