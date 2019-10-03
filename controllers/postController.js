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
  Post.create({
    title: req.body.title,
    body: req.body.body,
    author: req.session.user.username
  })
    .then(function() {
      res.redirect("/dashboard");
    })
    .catch(function(err) {
      res.send(err);
    });
};

// exports.viewPost = async function(req, res) {
//   db.Post.findOne({
//     where: { author: authorID }
//   })
//     .then(function(author) {
//       res.render("view-single-post", { author: author });
//     })
//     .catch(function() {
//       res.render("404");
//     });
// };

// exports.updatePost = function(req, res) {
//   db.Post.update({
//     where: {
//       id: req.body.id
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// };

// exports.deletePost = function(req, res) {
//   db.Post.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// };
