const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.grupo.findAll();
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.grupo.findByPk(id);
    return resultado
}

exports.store = async (grupo)=>{
    const resultado = await models.grupo.create(grupo)
    return resultado
}
exports.update = async (grupo,id)=>{
    const resultado = await models.grupo.update(grupo,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.grupo.destroy({
        where:{id:id}
    })
    return resultado
}