const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Aluno = sequelize.define(name,
    {
        matricula: {
            type: DataTypes.STRING(50)
        },
    },
    {
        sequelize,
        tableName:name
    }
)

Aluno.associate = (models) =>{

    Aluno.belongsTo(models.usuario,{
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    Aluno.belongsToMany(models.hardskill,{
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskills'
    })

    
    Aluno.belongsToMany(models.grupo,{
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupos'
    })


    Aluno.hasMany(models.tarefa,{
        foreignKey:{
            name:'id_tarefa'
        },
        as:'tarefas'
    })

    Aluno.hasMany(models.questao_dia,{
        foreignKey:{
            name:'id_questao_dia'
        },
        as:'questoesDia'
    })
}

module.exports = Aluno