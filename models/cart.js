'use strict'
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
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

  }, {}
  );
  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Cart.hasMany(models.Item, {
      foreignKey: 'itemId'
    })
  }
  return Cart
}
