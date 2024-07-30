'use strict';

const { hashSync } = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [
      {
        nome: 'Administrador',
        email: 'admin@example.com',
        sexo: 'Masculino',
        cpf: '123.456.789-00',
        endereco: 'Rua Exemplo, 123',
        data_nascimento: new Date(1990, 1, 1),
        password_hash: hashSync('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        nome: 'Usuario',
        email: 'usuario@example.com',
        sexo: 'Feminino',
        cpf: '987.654.321-00',
        endereco: 'Avenida Exemplo, 456',
        data_nascimento: new Date(1985, 5, 15),
        password_hash: hashSync('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ];

    await queryInterface.bulkInsert('usuarios', data, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
