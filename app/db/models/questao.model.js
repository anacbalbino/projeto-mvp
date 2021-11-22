const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Questao = sequelize.define(name,
{
    descricao: {
        type: DataTypes.STRING(50)
    },

    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    upadatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
},
{
    sequelize,
    tableName:name
 }
)

Questao.associate = models=>{
    Questao.belongsTo(models.usuario,{
        foreignKey:{
            name:'id_questao'
        },
        as:'usuario'
    })

     Questao.belongsTo(models.hardskill,{
            foreignKey:{
                name:'id_questao'
            },
            as:'hardskill'
        })

     Questao.hasMany(models.questao_dia,{
            foreignKey:{
                name:'id_questao'
            },
            as:'questoes'
        })
}
module.exports = Questao