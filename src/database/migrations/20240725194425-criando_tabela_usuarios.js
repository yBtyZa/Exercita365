'use strict';

const { password } = require('../../config/database.config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      sexo:{
        type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
      },
      endereco:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      data_nascimento:{
        type: Sequelize.DATE,
        allowNull: false
      },
      password_hash:{
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
