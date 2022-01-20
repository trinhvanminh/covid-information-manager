const e = require("express");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const axios = require("axios");
const db = require("../db");
const bcrypt = require("bcrypt");

class UserSystemController {
  // GET Information User /
  async viewInforUser(req, res) {
    try {
      const role = localStorage.getItem("role");
      const sodu = localStorage.getItem("sodu");
      const idWallet = localStorage.getItem("idPayMent");
      let response = await axios.put(`http://localhost:3003/api/history`, {
        id: idWallet,
      });

      res.render("./user/informationUser", {
        authenticated: req.authenticated,
        sodu,
        role,
        history: response.data.data.rows,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // GET Notify Payment User /
  notifyPaymentUser(req, res) {
    const role = localStorage.getItem("role");
    res.render("./user/notifyPayment", {
      authenticated: req.authenticated,
      role,
    });
  }

  // GET Cart User /
  cartUser(req, res) {
    const role = localStorage.getItem("role");
    res.render("./user/cartUser", {
      authenticated: req.authenticated,
      role,
    });
  }

  // GET Checkout User /
  checkoutUser(req, res) {
    const role = localStorage.getItem("role");
    const sodu = localStorage.getItem("sodu");
    res.render("./user/checkoutPayment", {
      authenticated: req.authenticated,
      role,
      sodu,
    });
  }
  // patch Checkout Cart / - Thanh Toán Đơn Hàng Qua Hệ Thống Bên Kia
  async checkoutCartUser(req, res) {
    try {
      const role = localStorage.getItem("role");
      const idWallet = localStorage.getItem("idPayMent");
      const amount = 120000;
      const hanMucThanhToan = localStorage.getItem("hanMucThanhToan");
      if (amount < hanMucThanhToan) {
        res.render("./user/checkoutPayment", {
          authenticated: req.authenticated,
          message:
            "Số tiền thanh toán hiện tại thấp hơn hạn mức thanh toán - Hạn mức thanh toán hiện tại là: " +
            hanMucThanhToan,
          type: "warning",
          role,
        });
      } else {
        // const amount = 100000;
        let response = await axios.put(`http://localhost:3003/api/payment`, {
          id: idWallet,
          amount,
        });
        res.render("./user/informationUser", {
          authenticated: req.authenticated,
          message: response.data.message,
          type: "success",
          role,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // GET Balance User /
  balanceUser(req, res) {
    const idWallet = localStorage.getItem("idPayMent");
    const sodu = localStorage.getItem("sodu");
    const role = localStorage.getItem("role");

    res.render("./user/accountBalance", {
      authenticated: req.authenticated,
      idWallet,
      sodu,
      role,
    });
  }

  // GET Connect Wallet /
  connectWalletUser(req, res) {
    const role = localStorage.getItem("role");
    res.render("./user/connectWallet", {
      authenticated: req.authenticated,
      role,
    });
  }

  // POST Connect Wallet /
  async connectPostWalletUser(req, res) {
    try {
      const role = localStorage.getItem("role");
      const { idWallet } = req.body;
      let response = await axios(
        `http://localhost:3003/api/connect-wallet/${idWallet}`
      );
      localStorage.setItem("idPayMent", response.data.data.rows[0].id);
      localStorage.setItem("sodu", response.data.data.rows[0].sodu);
      res.render("./user/informationUser", {
        authenticated: req.authenticated,
        message: response.data.message,
        type: "success",
        sodu: response.data.data.rows[0].sodu,
        role,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // GET Change Password User /
  changePasswordViewUser(req, res) {
    const role = localStorage.getItem("role");
    res.render("./user/changePassword", {
      authenticated: req.authenticated,
      role,
    });
  }

  // POST Change Password User /
  changePasswordUser(req, res) {
    const role = localStorage.getItem("role");
    const { username, password, newpassword } = req.body;
    db.query('select "password" from public."User" where "username" = $1', [
      req.body.username,
    ]).then((data) => {
      if (data.rowCount == 0) {
        res.render("./user/changePassword", {
          message: "tai khoan hoac mk khong chinh xac",
          type: "warning",
          authenticated: req.authenticated,
          role,
        });
      } else if (data.rowCount == 1 && data.rows[0].password === "") {
        console.log("here");

        bcrypt
          .hash(newpassword, 10)
          .then((hash) => {
            db.query(
              'update public."User" set "password" = $1 where "username" = $2',
              [hash, username]
            );
            res.render("./user/changePassword", {
              message: "doi mat khau thanh cong",
              type: "success",
              authenticated: req.authenticated,
              role,
            });
          })
          .catch((err) => console.log(err));
      } else {
        // Load hash from your password DB.
        bcrypt
          .compare(password, data.rows[0].password)
          .then((match) => {
            if (match) {
              bcrypt
                .hash(newpassword, 10)
                .then((hash) => {
                  db.query(
                    'update public."User" set "password" = $1 where "username" = $2',
                    [hash, username]
                  );
                  res.render("./user/changePassword", {
                    message: "doi mat khau thanh cong",
                    type: "success",
                    authenticated: req.authenticated,
                    role,
                  });
                })
                .catch((err) => console.log(err));
            } else {
              res.render("./user/changePassword", {
                message: "sai mat khau cu",
                type: "warning",
                authenticated: req.authenticated,
                role,
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }
}

module.exports = new UserSystemController();
