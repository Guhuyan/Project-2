const db = require("../models");

// This is for postController.js once it is created.

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
