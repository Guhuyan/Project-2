const db = require("./models");

// Homepage logic
exports.home = function(req, res) {
  // res.render("login");
  res.render("index");
};

exports.login = function(req, res) {
  res.send("Thank you for trying to login.");
};

exports.logout = function(req, res) {
  res.send("Thank you for trying to logout.");
};

// Create a new user using the data provided by the request
exports.register = function(req, res) {
  db.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    birthmonth: req.body.birthmonth,
    birthdate: req.body.birthdate,
    birthyear: req.body.birthyear
  });
  res.send("Thank you for trying to register.");
};

// Sequelize code to find all users, and return them to the user as json data
exports.findAll = function(req, res) {
  db.User.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
};

// Sequelize code to find a single user where the id is equal to req.params.id, and return them to the user as json data
exports.findOne = function(req, res) {
  db.Post.findOne({
    where: {
      username: req.params.username
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
};

/* 

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
