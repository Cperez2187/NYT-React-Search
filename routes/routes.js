const Article = require('../models/Article.js');

module.exports = app => {

  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  // This is the route we will send GET requests to retrieve our most recent search data.
  // We will call this route the moment our page gets rendered
  app.get("/api", (req, res) => {

    // We will find all the records, sort it in descending order, then limit the records to 5
    Article.find({}).sort([
      ["date", "descending"]
    ]).limit(5).exec((err, doc) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });

  // This is the route we will send POST requests to save each search.
  app.post("/api", (req, res) => {
    console.log("BODY: " + req.body);
    const { title, date, url } = req.body;

    // Here we'll save the article based on the JSON input.

    Article.create({
      title,
      date,
      url
    }, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Saved Search");
      }
    });
  });

};
