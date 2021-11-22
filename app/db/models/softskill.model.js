const{DataTypes} = require('sequelize');
const { associate } = require('./aluno.model');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const SoftSkill = sequelize.define(name,
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

SoftSkill.associate = models=>{

    SoftSkill.belongsToMany(models.aluno,{
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey:{
            name:'id_softSkill'
        },
        as:'aluno'
    })

    SoftSkill.belongsToMany(models.avaliacao360,{
        through: 'softskill_avaliacao360',
        timestamps: false,
        foreignKey:{
            name:'id_softSkill'
        },
        as:'avaliacao360'
    })

}
module.exports = SoftSkill