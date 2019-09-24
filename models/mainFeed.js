module.exports = function (sequelize, DataTypes) {
    const mainFeed = sequelize.define("mainFeed", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        messageBody: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    return mainFeed;
};
