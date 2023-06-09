const {Router} =require("express");
const getCharById= require("../controllers/getCharById");
const getCharDetail= require("../controllers/getCharDetail");
const router= Router();
const express = require("express");
let favs= require("../utils/favs");
const cors= require("cors")

router.use(express.json());
router.get("/onsearch/:id",getCharById)


router.get("/detail/:id", getCharDetail)





router.post("/fav",(req,res)=>{
  favs.push(req.body);
  res.status(200).json({status:"ok"})
});

router.get("/fav",(req,res)=>{
res.status(200).json(favs)
});

router.delete("/fav/:id",(req,res)=>{
    const {id}= req.params
    favs = favs.filter((filtro)=> filtro.id!==id)
    res.status(200).json({status:"ok"})
});


module.exports= router;