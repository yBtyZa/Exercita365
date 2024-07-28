const connection = require('../database/connection')
const { DataTypes } = require('sequelize')
const Atividades = require('./Atividades')
const Locais_atividades = require('./Locais_atividades')

const Locais = connection.define('locais', {
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  localidade: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  coordenadas: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  },
  maps_link: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
})

Locais.belongsToMany(Atividades, {
  through: Locais_atividades,
  foreignKey: 'local_id',
  otherKey: 'atividade_id'
})

module.exports = Locais