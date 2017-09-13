const Article = require('../models/Article.js');

module.exports = (app) => {

  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  // This is the route we will send GET requests to retrieve our most recent search data.
  // We will call this route the moment the 'Main' component gets mounted
  app.get("/api", (req, res) => {

    // We will find all the records, then sort it in descending order
    Article.
      find({}).
      sort([["date", "descending"]]).
      exec((err, savedArticles) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log(savedArticles);
          res.send(savedArticles);
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
        console.log("Saved Search");
      }
    });
  });

  // This is the route we will DELETE requests
  // to delete an article from the database
  app.delete("/api", (req, res) => {
    console.log('Delete: ', req.body);
    const { url } = req.body;

    Article.findOneAndRemove(url, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Article Deleted");
      }
    });
  });

};
