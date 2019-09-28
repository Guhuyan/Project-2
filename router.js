const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/api/users/create", userController.register);

router.get("/api/users/:username", findOne);
router.get("/api/users", findAll);

/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/

module.exports = router;
