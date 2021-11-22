const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const AtividadeAvaliativa = sequelize.define(name,
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

AtividadeAvaliativa.associate = models=>{
    AtividadeAvaliativa.hasMany(models.grupo,{
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupos'
    })

    AtividadeAvaliativa.hasMany(models.avaliacao360,{
        foreignKey:{
            name:'id_avaliacao360'
        },
        as:'avaliacoes'
    })

    AtividadeAvaliativa.belongsToMany(models.hardskill,{
        through: 'atividade_hardskill',
        timestamps: false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'atividades'
    })

    AtividadeAvaliativa.belongsTo(models.turma,{
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })
}
module.exports = AtividadeAvaliativa