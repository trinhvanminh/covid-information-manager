const e = require("express");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

class UserSystemController {
  // GET Information User /
  viewInforUser(req, res) {
    const sodu = localStorage.getItem("sodu");
    res.render("./user/informationUser", {
      authenticated: req.authenticated,
      sodu,
    });
  }

  // GET Notify Payment User /
  notifyPaymentUser(req, res) {
    res.render("./user/notifyPayment",{
      authenticated: req.authenticated,
    });
  }

  // GET Cart User /
  cartUser(req, res) {
    res.render("./user/cartUser",{
      authenticated: req.authenticated,
    });
  }

  // GET Checkout User /
  checkoutUser(req, res) {
    res.render("./user/checkoutPayment",{
      authenticated: req.authenticated,
    });
  }

  // GET Balance User /
  balanceUser(req, res) {
    res.render("./user/accountBalance",{
      authenticated: req.authenticated,
    });
  }
}

module.exports = new UserSystemController();
