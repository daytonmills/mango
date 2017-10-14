const scraper = require('../controllers/scraper.js');
const article = require('../controllers/article.js');

module.exports = (app) =>
{
    app.get('/', article.landing);
    app.get('/saved', article.saved);

    app.post('/scrape', scraper.scrape);

    app.post('/save/:id', article.save);
    app.post('/unsave/:id', article.unsave);
}
