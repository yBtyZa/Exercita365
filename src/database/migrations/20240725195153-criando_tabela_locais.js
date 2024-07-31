'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locais', {
       id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       nome:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
       },
       descricao:{
        type: Sequelize.STRING(255),
        allowNull: false
       },
       localidade:{
        type: Sequelize.STRING(255),
        allowNull: false,
       },
       coordenadas:{
        type: Sequelize.STRING(255),
        allowNull: false,
       },
       usuario_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'usuarios',
          key: 'id'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       maps_link:{
        type: Sequelize.STRING(255),
        allowNull: false
       },
       createdAt:{
        type: Sequelize.DATE,
        allowNull: false
       },
       updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
       },
       deletedAt:{
        type: Sequelize.DATE
       },
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locais');
  }
};
