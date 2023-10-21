const { check, postMessage } = require("./crudRoutes");

function getRoutes(app) {
  app.get("/check/:params", check);
  app.post("/login", postMessage);
  app.post("/users/create", insertUser);
}

exports.getRoutes = getRoutes;
