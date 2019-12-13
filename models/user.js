'use strict'
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {}

    )

    User.associate = function(models) {
        User.hasMany(models.Cart, {
            foreignKey: 'userId'
        })
        User.hasMany(models.Review, {
            foreignKey: 'userId'
        })
    }
    return User
}