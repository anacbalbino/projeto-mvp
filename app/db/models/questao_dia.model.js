const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const QuestaoDia = sequelize.define(name,
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

QuestaoDia.associate = models=>{
    QuestaoDia.belongsTo(models.aluno,{
        foreignKey:{
            name:'id_questao_dia'
        },
        as:'aluno'
    })

    QuestaoDia.belongsTo(models.questao,{
        foreignKey:{
            name:'id_questao_dia'
        },
        as:'questao_dia'
    })
}
module.exports = QuestaoDia