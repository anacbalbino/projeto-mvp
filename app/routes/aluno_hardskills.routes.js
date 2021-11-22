module.exports = (()=>{

    const alunoHardskillsController = require("../controllers/aluno_hardskills.controller")

    let router = require("express").Router();

    router.post("/:id",async(req,res)=>{
        const hardskill = await alunoHardskillsController.store(req.body,req.params.id);
        res.json(hardskill)

    })

    router.delete("/:id",async(req,res)=>{
        const hardskill = await alunoHardskillsController.destroy(req.body,req.params.id);
        res.json(hardskill)
    })

    return router

})()