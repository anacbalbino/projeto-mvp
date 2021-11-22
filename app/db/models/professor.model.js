const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Professor = sequelize.define(name,
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

Professor.associate = (models) =>{

    Professor.belongsTo(models.usuario,{
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    Professor.belongsToMany(models.turma,{
        through: 'professor_turma',
        timestamps: false,
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    Professor.belongsToMany(models.disciplina,{
        through: 'professor_disciplina',
        timestamps: false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'disciplina'
    })

    
}

module.exports = Professor