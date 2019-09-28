const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);

/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/

module.exports = router;
