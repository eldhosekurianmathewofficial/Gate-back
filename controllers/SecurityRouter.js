const express=require("express")
const cors=require("cors")
const secrouter=express.Router()
const visitordata=require("../models/SecurityModel")
const adminmodel=require("../models/AdminModel")

secrouter.post("/addvisitor",async(req,res)=>{
    let data=req.body
    let datasave=new visitordata(data)
    let result=await datasave.save()
    res.json({
        status:"success"
    })

})

secrouter.post("/viewmyvisitors",async(req,res)=>{

    let data = req.body
    let result=await visitordata.find(data)
    res.json(result)

})

module.exports=secrouter