const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      isDecimal: true,
      isLowercase: true,
      isUppercase: true,
      len: [1, 30]
    },
    birthmonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    birthyear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isDecimal: false,
      isLowercase: true,
      isUppercase: true,
      len: [1, 2]
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isLoggedin: {
      type: DataTypes.BOOLEAN,
      DefaultValue: false
    },
    errors: {
      type: DataTypes.STRING
    }
  });

  User.login = function() {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { email: this.email } })
        .then(userLoggingIn => {
          // If result exists & database's user password is equal to the request's password
          if (
            userLoggingIn &&
            bcrypt.compareSync(this.password, userLoggingIn.password)
          ) {
            resolve(
              `Both passwords are equal to each other!! ${userLoggingIn.password} is the hashed password in our database. ${this.password} is the password the user just entered.`
            );
          } else {
            reject("Login failed.");
            // return false;
          }
        })
        .catch(() => {
          reject(
            `Please try again later. this.email is equal to ${this.email}`
          );
        });
    });
  };

  User.register = function(req, res) {
    let salt = bcrypt.genSaltSync(10);
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      birthmonth: req.body.birthmonth,
      birthday: req.body.birthday,
      birthyear: req.body.birthyear,
      gender: req.body.gender
    });
  };

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
