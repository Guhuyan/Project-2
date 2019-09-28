const bcrypt = require("bcryptjs");
const db = require("../models");

module.exports = function(sequelize, DataTypes) {
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
      allowNull: false
    },
    isLoggedin: {
      type: DataTypes.BOOLEAN,
      DefaultValue: false
    },
    errors: {
      type: DataTypes.STRING
    }
  });

  /*
  User.Instance.prototype.login = function () {
    return new Promise((resolve, reject)) => {
      db.findOne({username: this.data.username}).then((checkUser)) => {
        if (checkUser && bcrypt.compareSync(this.data.password, checkUser.password)) {
          resolve("Resolved.");
        } else {
          reject("The username or password you have entered is wrong.");
        }
      }).catch(function() {
        reject("Please try again at another time.")
      });
    });
  }

  User.Instance.prototype.register = function() {
    if (!this.errors.length) {
      let salt = bcrypt.genSaltSync(10);
      this.data.password = bcrypt.hashSync(this.data.password, salt);
      db.insertOne(this.data);
    }
  }
  */

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
