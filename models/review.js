'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    },
    itemId: {
      type: DataTypes.INTEGER
    }
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Review.hasMany(models.Item, {
      foreignKey: 'itemId'
    })
  }
  return Review;
};