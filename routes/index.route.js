const { verifyToken } = require("../jwt");

function route(app) {
  app.use("/auth", verifyToken, require("./users.route"));
  app.use("/manager", require("./manager.route"));
  app.use("/admin", require("./admin.route"));
  app.use("/", require("./site.route"));
}

module.exports = route;
