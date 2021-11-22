module.exports = (()=>{

    const grupoController = require("../controllers/grupo.controller")

    let router = require("express").Router();

    router.get("/",async(req,res)=>{
        const grupo = await grupoController.index();
        res.json(grupo)
    })

    router.get("/:id",async(req,res)=>{
        const grupo = await grupoController.show(req.params.id);
        res.json(grupo)

    })
    router.post("/",async(req,res)=>{
        const grupo = await grupoController.store(req.body);
        res.json(grupo)

    })
    router.put("/:id",async(req,res)=>{
        const grupo = await grupoController.update(req.body,req.params.id);
        res.json(grupo)
    })
    router.delete("/:id",async(req,res)=>{
        const grupo = await grupoController.destroy(req.params.id);
        res.json(grupo)
    })

    return router

})()