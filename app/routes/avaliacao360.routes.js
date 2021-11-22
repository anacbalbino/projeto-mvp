module.exports = (()=>{

    const avaliacao360Controller = require("../controllers/avaliacao360.controller")

    let router = require("express").Router();

    router.get("/",async(req,res)=>{
        const avaliacao360 = await avaliacao360Controller.index();
        res.json(avaliacao360)
    })

    router.get("/:id",async(req,res)=>{
        const avaliacao360 = await avaliacao360Controller.show(req.params.id);
        res.json(avaliacao360)

    })
    router.post("/",async(req,res)=>{
        const avaliacao360 = await avaliacao360Controller.store(req.body);
        res.json(avaliacao360)

    })
    router.put("/:id",async(req,res)=>{
        const avaliacao360 = await avaliacao360Controller.update(req.body,req.params.id);
        res.json(avaliacao360)
    })
    router.delete("/:id",async(req,res)=>{
        const avaliacao360 = await avaliacao360Controller.destroy(req.params.id);
        res.json(avaliacao360)
    })

    return router

})()