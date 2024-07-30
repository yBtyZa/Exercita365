'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        categoria: 'Ciclismo',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Corrida',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Natação',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Musculação',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Surf',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Yoga',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Pilates',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Caminhada',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'Boxe',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        categoria: 'CrossFit',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ];

    await queryInterface.bulkInsert('atividades', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('atividades', null, {});
  }
};
