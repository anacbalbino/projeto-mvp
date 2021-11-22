

const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Curso = sequelize.define(name,
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

Curso.associate = (models) =>{

    Curso.hasMany(models.aluno,{
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })


    Curso.belongsToMany(models.turma,{
        through: 'curso_turma',
        timestamps: false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

}

module.exports = Curso