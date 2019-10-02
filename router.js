const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");

router.get("/", userController.home);
router.post("/register", userController.register);
router.get("/login", userController.loginget);
router.post("/login", userController.loginpost);
router.get("/logout", userController.logout);
router.get("/create-post", postController.postget);
router.post("/create-post", postController.create);

/*
app.put("/api/posts", updatePost);
app.delete("/api/posts/:id", deletePost);
*/
//

module.exports = router;
