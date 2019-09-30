const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
router.get("/", userController.home);
router.get("/login", userController.loginget)
router.post("/login", userController.loginpost)
router.post("/logout", userController.logout);
router.get("/dashboard", userController.dashboard);
router.post("/register", userController.register);


/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/

module.exports = router;
