const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);
router.post("/register", userController.register);
router.get("/login", userController.loginget);
router.post("/login", userController.loginpost);
router.get("/logout", userController.logout);

/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/

module.exports = router;
