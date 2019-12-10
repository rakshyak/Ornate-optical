'use strict'
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      }
    },
    {}
  )
  Cart.associate = function (models) {
    // Cart.belongsTo(models.Item, {
    //   foreignKey: 'itemId',
    //   onDelete: 'CASCADE'
    // })
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
