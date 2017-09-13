// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration 
mongoose.connect("mongodb://heroku_ht48r83d:fgct50t7uoguq0kq31rrlmmlbq@ds129374.mlab.com:29374/heroku_ht48r83d", {
  useMongoClient: true
});
// mongoose.connect("mongodb://localhost/TestNYTReact", {
//   useMongoClient: true
// });

let db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -----------------------------------------------
// require routes
require('./routes/routes.js')(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
