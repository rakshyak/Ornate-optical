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
    },
    {
      firstName: 'Melissa',
      lastName: 'Donegan',
      email: 'mel@mail.com',
      password: '654321',
      address: '321 Road st',
      username: 'mel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'James',
      lastName: 'White',
      email: 'james@mail.com',
      password: 'asdfg',
      address: '456 Road dr',
      username: 'JWhite',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
