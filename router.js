const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);
router.post("/register", userController.register);
router.get("/login", userController.getlogin);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/dashboard", userController.dashboard);

/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/

module.exports = router;
