class ManagerController {
  // GET /
  relatedCovidView(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      require("../db")
        .query('select *  from public."Nguoi"')
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/related", { authenticated: req.authenticated });
          } else {
            res.render("manager/related", {
              authenticated: req.authenticated,
              data: data.rows,
            });
          }
        });
    }
  }
}

module.exports = new ManagerController();
