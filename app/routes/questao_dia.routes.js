module.exports = (()=>{

    const questaoDiaController = require("../controllers/questao_dia.controller")

    let router = require("express").Router();

    router.get("/",async(req,res)=>{
        const questaoDia = await questaoDiaController.index();
        res.json(questaoDia)
    })

    router.get("/:id",async(req,res)=>{
        const questaoDia = await questaoDiaController.show(req.params.id);
        res.json(questaoDia)

    })
    router.post("/",async(req,res)=>{
        const questaoDia = await questaoDiaController.store(req.body);
        res.json(questaoDia)

    })
    router.put("/:id",async(req,res)=>{
        const questaoDia = await questaoDiaController.update(req.body,req.params.id);
        res.json(questaoDia)
    })
    router.delete("/:id",async(req,res)=>{
        const questaoDia = await questaoDiaController.destroy(req.params.id);
        res.json(questaoDia)
    })

    return router

})()