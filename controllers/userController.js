const db = require("../models");
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

exports.loginget = function (res) {
  res.render("login")
}
//Compare user input password to encrypted database password, redirect if match.
exports.loginpost = function (req, res) {
  db.User.findOne({ where: { email: req.body.user_email } }).then(function (result) {
    if (result && bcrypt.compareSync(req.body.pwd, result.password)) {
      req.session.result = { email: result.email };
      req.session.save(function() {
        res.redirect("/");
      });
    } else {
      res.redirect("/login");
    }
  });
};

exports.dashboard = function (res) {
  res.render("main")
}

exports.logout = function (req, res) {
  res.send("Thank you for trying to logout.");
  req.session.destroy(function() {
    res.redirect("/");
  });
};

// Create a new user using the data provided by the request
exports.register = function(req, res) {
  console.log(req.body);
  let user = db.User;
  user.register(req, res);
  res.redirect("/");
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
