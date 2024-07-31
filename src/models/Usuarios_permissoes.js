const connection = require('../database/connection')
const {DataTypes} = require('sequelize')

const Usuarios_permissoes = connection.define('usuarios_permissoes', {
    usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false
       },
       permissao_id:{
        type: DataTypes.INTEGER,
        allowNull: false
       }
},
{
    paranoid: true
}
)

module.exports = Usuarios_permissoes