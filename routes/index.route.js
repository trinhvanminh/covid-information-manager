function route(app) {
  app.use("/", require("./site.route"));
  app.use("/auth", require("./user.route"));
}

module.exports = route;
