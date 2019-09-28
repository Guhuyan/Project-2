const db = require("../models");

// Homepage logic
exports.home = function (req, res) {
  // res.render("login");
  res.render("index");
  /*
  if (req.session.user) {
    res.render("index", {username: req.session.user.username})
  } else {
    res.render("login");
  }
  */
};

exports.login = function (req, res) {
  res.send("Thank you for trying to login.");
  /*
  let user = new User(req.body);
  user.login().then(function(result) {
    req.session.user = {username: user.data.username};
    req.session.save(function() {
      res.redirect("/");
    })
  }).catch(function(err) {
    res.send(err);
  })
  */
};

exports.logout = function (req, res) {
  res.send("Thank you for trying to logout.");
  /*
  req.session.destroy(function() {
    res.redirect('/')
  })
  */
};

// Create a new user using the data provided by the request
exports.register = function (req, res) {
  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    birthmonth: req.body.birthmonth,
    birthday: req.body.birthday,
    birthyear: req.body.birthyear,
    gender: req.body.gender,
    isLoggedin: req.body.isLoggedin
  });
  res.send("Thank you for trying to register.");
  /*
  let user = new User(req.body)
  user.register()
  if (user.errors.length) {
    res.send(user.errors)
  } else {
    res.send("Congrats, there are no errors.")
  }
  */
};

// Sequelize code to find all users, and return them to the user as json data
exports.findAll = function (req, res) {
  db.User.findAll({}).then(function (dbPost) {
    res.json(dbPost);
  });
};

// Sequelize code to find a single user where the id is equal to req.params.id, and return them to the user as json data
exports.findOne = function (req, res) {
  db.User.findOne({
    where: {
      username: req.params.username
    }
  }).then(function (dbPost) {
    res.json(dbPost);
  });
};

/*
This is for postController.js once it is created.

exports.updatePost = function(req, res) {
    db.Post.update({
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
}

exports.deletePost = function(req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbPost) {
        res.json(dbPost);
    });
}

*/
