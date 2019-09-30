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

  User.login = function (req) {
    User.findOne({ where: { email: req.body.email } }).then(function (result) {
      if (result && bcrypt.compareSync(req.body.password, result.password)) {
        let values = { isLoggedin: 1 };
        let selector = {
          where: { isLoggedin: 0 }
        };
        User.update(values, selector).then(function (result) {
          if(result[0] === 1) {
            console.log(`'isLoggedin' updated to: ${result}`)
          }
        })
      }
    });
    // return new Promise((resolve, reject) => {
    //   User.find({ where: { username: req.body.username } })
    //     .then(result => {
    //       if (
    //         result &&
    //         bcrypt.compareSync(req.body.password, result.password)
    //       ) {
    //         resolve("Login Successful!");
    //       } else {
    //         reject("Login failed.");
    //       }
    //     })
    //     .catch(function() {
    //       reject("Server error.");
    //     });
    // });
  };

  User.register = function (req, res) {
    let salt = bcrypt.genSaltSync(10);
    console.log(req.body);
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      birthmonth: req.body.birthmonth,
      birthday: req.body.birthday,
      birthyear: req.body.birthyear,
      gender: req.body.gender,
      isLoggedin: req.body.isLoggedin
    });
  };

  User.associate = function (models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
