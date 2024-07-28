const connection = require('../database/connection')
const { DataTypes } = require('sequelize')

const Atividades = connection.define('atividades', {
    categoria:{
        type: DataTypes.STRING(50),
        allowNull: false
       },
},
{
    paranoid: true
})

module.exports = Atividades