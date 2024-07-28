const connection = require ('../database/connection')
const { DataTypes } = require('sequelize')

const Locais_atividades = connection.define('locais_atividades', {
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
       }
},
{
    paranoid: true
})

module.exports = Locais_atividades