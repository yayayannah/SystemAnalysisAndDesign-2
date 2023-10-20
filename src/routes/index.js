const { createUser } = require("./crudRoutes");

function getRoutes(app) {
  // app.get("/check/:params", check);
  // app.post("/post", postMessage);
  app.post("/create-user", createUser);
}

exports.getRoutes = getRoutes;
