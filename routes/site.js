const express = require("express");
const router = express.Router();
// const siteController = require("./controllers/SiteController");

// router.get("/search", siteController.search);
// router.get("/", siteController.index);

// module.exports = router;

router.get("/", (req, res) => res.render("home"));
module.exports = router;
