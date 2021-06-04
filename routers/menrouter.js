const express=require("express");
const router=new express.Router();
const MensRanking=require("../models/mens")



//we will handle post request

router.post("/mens",async(req,res)=>{
    try{
  
       const mensdata = new MensRanking(req.body);
       const data =  await mensdata.save();
       res.send(data);
      
    }
    catch(e){
      res.status(400).send(e)
    }
  
  })
  
  
  // we will handle get request
  
  router.get("/mens",async(req,res)=>{
    try{
  
       const getmensdata = await MensRanking.find({});
      
       res.status(200).send(getmensdata);
      
    }
    catch(e){
      res.status(400).send(e)
    }
  
  })
  
  // we will get data by id 
  
  router.get("/mens/:id",async(req,res)=>{
    try{
       const id=req.params.id;
       const getmensdata = await MensRanking.findById(id);
      
       res.status(200).send(getmensdata);
      
    }
    catch(e){
      res.status(400).send(e)
    }
  
  })
  
  //we will update by id 
  
  router.patch("/mens/:id",async(req,res)=>{
    try{
       const id=req.params.id;
       const getmensdata = await MensRanking.findByIdAndUpdate(id,req.body,{
         new:true
       });
      
       res.status(200).send(getmensdata);
      
    }
    catch(e){
      res.status(400).send(e)
    }
  
  })
  
  
  //we will delete by id 
  router.delete("/mens/:id",async(req,res)=>{
    try{
       const id=req.params.id;
       const getmensdata = await MensRanking.findByIdAndDelete(id
       );
      
       res.status(200).send(getmensdata);
      
    }
    catch(e){
      res.status(400).send(e)
    }
  
  })
  
  module.exports=router;