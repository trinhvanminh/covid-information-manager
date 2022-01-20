const e = require("express");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const axios = require("axios");

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
    res.render("./user/notifyPayment", {
      authenticated: req.authenticated,
    });
  }

  // GET Cart User /
  cartUser(req, res) {
    res.render("./user/cartUser", {
      authenticated: req.authenticated,
    });
  }

  // GET Checkout User /
  checkoutUser(req, res) {
    res.render("./user/checkoutPayment", {
      authenticated: req.authenticated,
    });
  }
  // patch Checkout Cart / - Thanh Toán Đơn Hàng Qua Hệ Thống Bên Kia
  async checkoutCartUser(req, res) {
    try {
      const idWallet = localStorage.getItem("idPayMent");
      const amount = 100000;
      // const amount = 100000;
      let response = await axios.put(`http://localhost:3003/api/payment`, {
        id: idWallet,
        amount,
      });
      res.render("./user/informationUser", {
        authenticated: req.authenticated,
        message: response.data.message,
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }

  // GET Balance User /
  balanceUser(req, res) {
    const idWallet = localStorage.getItem("idPayMent");
    const sodu = localStorage.getItem("sodu");

    res.render("./user/accountBalance", {
      authenticated: req.authenticated,
      idWallet,
      sodu,
    });
  }

  // GET Connect Wallet /
  connectWalletUser(req, res) {
    res.render("./user/connectWallet", {
      authenticated: req.authenticated,
    });
  }

  // POST Connect Wallet /
  async connectPostWalletUser(req, res) {
    try {
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
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserSystemController();
