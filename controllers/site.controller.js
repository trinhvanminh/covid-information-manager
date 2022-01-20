const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
class SiteController {
  // GET /
  index(req, res, next) {
    const role = localStorage.getItem("role");
    console.log(role);
    
    res.render("home", { authenticated: req.authenticated, role });
  }

  // GET /*
  stuff(req, res, next) {
    res.redirect("/");
  }
}

module.exports = new SiteController();
