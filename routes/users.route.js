const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const auth = require("../middlewares/auth.middleware");

// Ví dụ về route có middleware. auth là 1 middleware - phải pass qua mới được truy cập vào controller
// router.get("/", auth, userController.getAll);

router.get("/login", usersController.loginView);
router.post("/login", usersController.login);
router.get("/register", usersController.registerView);
router.post("/register", usersController.register);

module.exports = router;
