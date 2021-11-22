const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.avalicao360.findAll();
    return resultado
}

exports.show = async (id)=>{
    const resultado = await models.avalicao360.findByPk(id);
    return resultado
}

exports.store = async (avalicao360)=>{
    const resultado = await models.avalicao360.create(avalicao360)
    return resultado
}
exports.update = async (avalicao360,id)=>{
    const resultado = await models.avalicao360.update(avalicao360,{
        where:{id:id}
    })
    return resultado
}
exports.destroy = async (id)=>{
    const resultado = await models.avalicao360.destroy({
        where:{id:id}
    })
    return resultado
}