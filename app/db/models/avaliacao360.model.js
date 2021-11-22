const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Avaliacao360 = sequelize.define(name,
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

Avaliacao360.associate = models=>{
    Avaliacao360.belongsTo(models.aluno,{
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })
    Avaliacao360.belongsTo(models.atividade_avaliativa,{
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'atividade_avaliativa'
    })
    Avaliacao360.belongsTo(models.grupo,{
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupo'
    })
    Avaliacao360.belongsToMany(models.softskill,{
        through: 'soft_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_softSkill'
        },
        as:'soft_skill'
    })
}
module.exports = Avaliacao360