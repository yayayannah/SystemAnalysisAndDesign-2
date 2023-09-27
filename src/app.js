const express = require("express");
const bodyParser = require("body-parser");

async function configureApp(pool) {
  console.log("Entering configuration");
  const app = express();
  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  app.set("db", pool);
  // 3. Create a route
  app.get("/", (req, res) => {
    res.send("You are in your home page!");
  });

  app.listen(3001, function () {
    console.log("Connecting to DB");
  });
  console.log("Exiting configuration.");
  return app;
}

exports.configureApp = configureApp;
