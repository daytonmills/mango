// Require Packages
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Declare App files
const app = express();
const scraper = require('./routes/html.js')(app);
const dataKey = require('./key');
var PORT = process.env.PORT || 3000;

// Configure Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.engine('hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views')

// Connect to Database
mongoose.Promise = Promise;

var dbConnect = process.env.MONGODB_URI || "mongodb://localhost/mango";
if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect(dbConnect);
}

const db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});