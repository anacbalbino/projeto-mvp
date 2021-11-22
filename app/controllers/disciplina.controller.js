const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.disciplina.findAll({
         include:['turma','professor','hardskill']
    });
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.disciplina.findByPk(id);
    return resultado
}

exports.store = async (disciplina)=>{
    const resultado = await models.disciplina.create(disciplina,{
        include : ['turma','professor','hardskill']
    })
    return resultado
}
exports.update = async (disciplina,id)=>{
    const resultado = await models.disciplina.update(disciplina,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.disciplina.destroy({
        where:{id:id}
    })
    return resultado
}