const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

const Usuarios = connection.define('usuarios', {
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      sexo:{
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
        allowNull: false
      },
      cpf:{
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true
      },
      endereco:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      data_nascimento:{
        type: DataTypes.DATE,
        allowNull: false
      },
      password_hash:{
        type: DataTypes.STRING(255),
        allowNull: false
      },
})

module.exports = Usuarios