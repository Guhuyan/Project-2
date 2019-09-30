const db = require("../models");
const session = require("express-session");

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
  console.log(req.body)

  let user = db.User;
  user.login(req, res)
  // .then(function(result) {
  //   result.session.user = { email: user.data.email };
  //   result.session.save(function() {
  //     location.reload();
  //   });
  // })
  // .catch(function(err) {
  //   res.send(err);
  // });
};
exports.dashboard = function (req, res) {
res.render("main")
}

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
  let user = db.User;
  user.register(req, res);
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
