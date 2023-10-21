const { check, postMessage } = require("./crudRoutes");

function getRoutes(app) {
  app.get("/check/:params", check);
  app.post("/post", postMessage);
}

exports.getRoutes = getRoutes;
