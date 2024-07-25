const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

const Locais = connection.define('locais', {
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
       },
       descricao:{
        type: DataTypes.STRING(255),
        allowNull: false
       },
       localidade:{
        type: DataTypes.STRING(50),
        allowNull: false,
       },
       coordenadas:{
        type: DataTypes.STRING(255),
        allowNull: false,
       },
       usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'usuarios',
          key: 'id'
         },
       },
       maps_link:{
        type: DataTypes.STRING(255),
        allowNull: false
       }
})

module.exports = Locais