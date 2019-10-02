const db = require("../models");

// This is for postController.js once it is created.

exports.postget = function(req, res) {
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("post", { username: req.session.user.username });
  }
};

exports.create = function(req, res) {
  let post = db.Post;
  post.createPost(req);
  res.redirect("/dashboard");
};

exports.updatePost = function(req, res) {
  db.Post.update({
    where: {
      id: req.body.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
};

exports.deletePost = function(req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
};
