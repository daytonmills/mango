const scraper = require('../controllers/scraper.js');

module.exports = (app) =>
{
    app.get('/', scraper.landing);
    app.get('/scrape', scraper.scrape);
}
