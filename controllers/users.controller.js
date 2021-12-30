const bcrypt = require("bcrypt");

class usersController {
  //[GET] /auth/login
  loginView(req, res, next) {
    res.render("./auth/login");
  }
  //[POST] /auth/login
  login(req, res, rext) {
    require("../db")
      .query('select "password" from public."User" where "username" = $1', [
        req.body.username,
      ])
      .then((data) => {
        if (data.rowCount == 0) {
          console.log("mat khau khong chinh xac");
          res.render("./auth/login", {
            message: "tai khoan hoac mk khong chinh xac",
          });
        } else {
          // Load hash from your password DB.
          bcrypt
            .compare(req.body.password, data.rows[0].password)
            .then((match) => {
              if (match) {
                console.log("login thanh cong");
                res.render("home", { message: "login thanh cong" });
              } else {
                console.log("sai mat khau");
                res.render("./auth/login", {
                  message: "tai khoan hoac mk khong chinh xac",
                });
              }
            })
            .catch((err) => console.log(err));
          //
        }
      })
      .catch((err) => console.log(err));
  }
  // [GET] /auth/register
  registerView(req, res, next) {
    res.render("./auth/register");
  }
  // [POST] /auth/register
  register(req, res, rext) {
    const { username, password1, password2 } = req.body;
    // confirm mat khau
    if (password1 !== password2) {
      console.log("use js to handle");
      res.render("./auth/register", { message: "mat khau khong khop" });
    } else {
      // if exist username
      require("../db")
        .query('select * from public."User" where "username" = $1', [username])
        .then((data) => {
          if (data.rowCount >= 1) {
            console.log("login khong thanh cong");
            res.render("./auth/register", { message: "da ton tai username" });
          } else {
            bcrypt.hash(password1, 10).then((hash) => {
              // Store hash in your password DB.
              require("../db")
                .query(
                  'INSERT INTO "User"(username, password) VALUES ($1, $2)',
                  [username, hash]
                )
                .then((data) => {
                  if (data.rowCount === 1) {
                    res.render("./auth/register", {
                      message: "Register thanh cong",
                    });
                  } else {
                    res.render("./auth/register", { message: "Loi insert db" });
                  }
                });
            });
          }
        });
    }
  }
}

module.exports = new usersController();
