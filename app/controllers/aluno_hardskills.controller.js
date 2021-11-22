const models = require('../db/models');

exports.store = async (aluno,id)=>{

    const model = await models.aluno.findOne({
        where:{id_usuario:id}, include: {association:'hardskills'}
    })
    
    let refsHardSkills = [];
    for(let h in aluno.hardskills){
        let hardskill = aluno.hardskills[h];

        const [result] = await models.hardskill.findOrCreate({
            where:hardskill
        })

        refsHardSkills.push(result.id)
    }

    model.addHardskills(refsHardsSkills);

    return true
}

exports.destroy = async (aluno,id)=>{

    const model = await models.aluno.findOne({
        where:{id_usuario:id}, include: {association:'hardskills'}
    })
    
    let refsHardSkills = [];
    for(let h in aluno.hardskills){
        let hardskill = aluno.hardskills[h];

        const [result] = await models.hardskill.findOne({
            where:hardskill
        })
        if(result){
        refsHardSkills.push(result.id)
        }
    }

    model.removeHardskills(refsHardsSkills);

    return true
}