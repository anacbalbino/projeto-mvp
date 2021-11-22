const{DataTypes} = require('sequelize');
const { associate } = require('./aluno.model');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const HardSkill = sequelize.define(name,
{
    descricao: {
    type:DataTypes.STRING(50)
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

HardSkill.associate = models=>{
   
    HardSkill.belongsToMany(models.turma,{
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'turma'
    })

    HardSkill.belongsToMany(models.disciplina,{
        through: 'disciplina_hardskills',
        timestamps: false,
        foreignKey:{
            name:'id_hardSkill'
        },
        as:'disciplina'
    })

    HardSkill.belongsToMany(models.atividade_avaliativa,{
        through: 'atividade_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'atividade_avaliativa'
    })

    HardSkill.hasMany(models.questao,{
        foreignKey:{
            name:'id_questao'
        },
        as:'questoes'
    })

}
module.exports = HardSkill