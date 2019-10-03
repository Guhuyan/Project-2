const db = require("../models");
const bcrypt = require("bcryptjs");

// Homepage logic
exports.home = function(req, res) {
  if (req.session.user) {
    res.render("dashboard", { username: req.session.user.username });
  } else {
    res.render("index");
  }
};

//Render login page
exports.loginget = function(req, res) {
  if (!req.session.user) {
    res.render("login");
  } else {
    res.render("dashboard", { username: req.session.user.username });
  }
};

//Compare user input password to encrypted database password, redirect if match.
exports.loginpost = function(req, res) {
  db.User.findOne({ where: { email: req.body.user_email } }).then(function(
    user
  ) {
    if (user && bcrypt.compareSync(req.body.pwd, user.password)) {
      req.session.user = { username: user.username };
      req.session.save(function() {
        res.redirect("/");
      });
    } else {
      res.redirect("/login");
    }
  });
};

exports.dashboard = function(res) {
  res.render("main");
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};

// Create a new user using the data provided by the request
exports.register = function(req, res) {
  let salt = bcrypt.genSaltSync(10);
  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt),
    birthmonth: req.body.birthmonth,
    birthday: req.body.birthday,
    birthyear: req.body.birthyear,
    gender: req.body.gender
  })
    .then(function() {
      return res.redirect("/login");
    })
    .catch(function(err) {
      res.send(err);
    });
  // Need to fix this by either using callback or promise. Redirect need to execute only and only after user.register has finished executing.
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
