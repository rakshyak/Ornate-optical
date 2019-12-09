'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'Rakshyak',
      lastName: 'Kc',
      email: 'name@mail.com',
      password: '123456',
      address: '123 Street rd',
      username: 'kcr2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};

