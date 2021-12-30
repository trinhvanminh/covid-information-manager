function route(app) {
  app.use("/", require("./site.route"));
  app.use("/auth", require("./users.route"));
}

module.exports = route;
