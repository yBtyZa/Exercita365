'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        usuario_id: 1,
        permissao_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ];

    await queryInterface.bulkInsert('usuarios_permissoes', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios_permissoes', null, {});
  }
};
