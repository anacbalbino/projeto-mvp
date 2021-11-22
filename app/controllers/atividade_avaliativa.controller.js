const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.atividade_avaliativa.findAll();
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.atividade_avaliativa.findByPk(id);
    return resultado
}

exports.store = async (atividade_avaliativa)=>{
    const resultado = await models.atividade_avaliativa.create(atividade_avaliativa)
    return resultado
}
exports.update = async (atividade_avaliativa,id)=>{
    const resultado = await models.atividade_avaliativa.update(atividade_avaliativa,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.atividade_avaliativa.destroy({
        where:{id:id}
    })
    return resultado
}