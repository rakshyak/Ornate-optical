'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.Item, {
      foreignKey: 'itemId',
      onDelete: 'CASCADE'
    })
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Cart;
};