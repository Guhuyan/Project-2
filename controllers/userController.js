const db = require("../models");
const session = require("express-session");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");

// Homepage logic
exports.home = function(req, res) {
  if (req.session.result) {
    res.render("dashboard");
  } else {
    res.render("index");
  }
};

//Render login page
exports.getlogin = function(req, res) {
  res.render("login");
};

// Compare user input password to encrypted database password, redirect if match.
exports.login = function(req, res) {
  db.User.findOne({ where: { email: req.body.user_email } }).then(function(
    result
  ) {
    if (result && bcrypt.compareSync(req.body.pwd, result.password)) {
      req.session.result = { email: result.email };
      req.session.save(function() {
        res.redirect("/dashboard");
      });
    } else {
      res.redirect("/");
    }
  });
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  console.log("Thank you for trying to logout.");
  req.session.destroy(function() {
    res.redirect("/");
  });
};

// Create a new user using the data provided by the request
exports.register = function(req, res) {
  let user = db.User;
  user.register(req, res);
  res.send("Thank you for trying to register.");

  // let user = new User(req.body)
  // user.register()
  // if (user.errors.length) {
  //   res.send(user.errors)
  // } else {
  //   res.send("Congrats, there are no errors.")
  // }
};

// Sequelize code to find all users, and return them to the user as json data
exports.findAll = function(req, res) {
  db.User.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
};

// Sequelize code to find a single user where the id is equal to req.params.id, and return them to the user as json data
exports.findOne = function(req, res) {
  db.User.findOne({
    where: {
      username: req.params.username
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
};

// This is for postController.js once it is created.

// exports.updatePost = function(req, res) {
//     db.Post.update({
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
// }

// exports.deletePost = function(req, res) {
//     db.Post.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbPost) {
//         res.json(dbPost);
//     });
// }
