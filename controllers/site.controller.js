class SiteController {
  // GET /
  index(req, res, next) {
    res.render("home", { authenticated: req.authenticated });
  }
}

module.exports = new SiteController();
