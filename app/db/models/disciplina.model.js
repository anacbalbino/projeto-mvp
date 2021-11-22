const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Disciplina = sequelize.define(name,
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

Disciplina.associate = (models) =>{

    Disciplina.belongsTo(models.turma,{
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    Disciplina.belongsToMany(models.professor,{
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey:{
            name:'id_professor'
        },
        as:'professor'
    })

}

module.exports = Disciplina