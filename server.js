const express = require("express");
const expresshbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request");

mongoose.Promise = Promise;

const Example = require("./models/article");
const dataKey = require("./key");

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

mongoose.connect(dataKey.mongo);
var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
