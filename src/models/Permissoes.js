const connection = require('../database/connection')
const {DataTypes} = require('sequelize')

const Permissoes = connection.define('permissoes', {
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
       }
},
{
    paranoid: true
})

module.exports = Permissoes