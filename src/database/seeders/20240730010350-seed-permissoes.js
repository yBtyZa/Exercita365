'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        nome: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ];

    await queryInterface.bulkInsert('permissoes', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permissoes', null, {});
  }
};
