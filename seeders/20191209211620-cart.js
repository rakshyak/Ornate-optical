'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Carts', [{
      userId: 1,
      itemId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      itemId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      itemId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      itemId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      itemId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      itemId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});

  }
};