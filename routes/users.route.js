const router = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");

// Ví dụ về route có middleware. auth là 1 middleware - phải pass qua mới được truy cập vào controller
// router.get("/", auth, userController.getAll);

router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
