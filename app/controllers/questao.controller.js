const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.questao.findAll({
        includ: ['usuario']
    });
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.questao.findByPk(id);
    return resultado
}

exports.store = async (questao)=>{
    const resultado = await models.questao.create(questao)
    return resultado
}
exports.update = async (questao,id)=>{
    const resultado = await models.questao.update(questao,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.questao.destroy({
        where:{id:id}
    })
    return resultado
}