

const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Turma = sequelize.define(name,
    {
        descricao: {
            type: DataTypes.STRING(50)
        },
    },
    {
        sequelize,
        tableName:name
    }
)

Turma.associate = (models) =>{

    Turma.hasMany(models.disciplina,{
        foreignKey:{
            name:'id_turma'
        },
        as:'disciplina'
    })


    Turma.belongsToMany(models.curso,{
        through: 'turma_curso',
        timestamps: false,
        foreignKey:{
            name:'id_curso'
        },
        as:'curso'
    })

    Turma.belongsToMany(models.hardskill,{
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskill'
    })

    
}

module.exports = Turma