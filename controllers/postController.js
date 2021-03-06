const db = require("../models");

exports.postget = function(req, res) {
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("post");
  }
};

exports.create = function(req, res) {
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    author: req.session.user.username,
    UserId: req.session.user.id
  })
    .then(function() {
      console.log(req.body);
      res.redirect("/");
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.getPosts = function(req, res) {
  let query = {};
  if (req.session) {
    query.UserId = req.session.user.id;
  }
  db.Post.findAll({
    where: query
  }).then(function(dbPost) {
    res.json(dbPost);
  });
};

exports.viewPost = async function(req, res) {
  db.Post.findOne({
    where: { author: authorID }
  })
    .then(function(author) {
      res.render("view-single-post", { author: author });
    })
    .catch(function() {
      res.render("404");
    });
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
