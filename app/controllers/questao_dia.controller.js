const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.questao_dia.findAll({
        includ: ['usuario']
    });
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.questao_dia.findByPk(id);
    return resultado
}

exports.store = async (questao_dia)=>{
    const resultado = await models.questao_dia.create(questao_dia)
    return resultado
}
exports.update = async (questao_dia,id)=>{
    const resultado = await models.questao_dia.update(questao_dia,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.questao_dia.destroy({
        where:{id:id}
    })
    return resultado
}