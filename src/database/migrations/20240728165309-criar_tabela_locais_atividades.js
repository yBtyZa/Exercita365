'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locais_atividades', {
       id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       local_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'locais',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
         }
       },
       atividade_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'atividades',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
         },
       },
       createdAt: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
       },
       deletedAt: {
        type: Sequelize.DATE
       }
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locais_atividades');
  }
};
