const express=require("express")
const cors=require("cors")
const adrouter=express.Router()
const bcrypt=require("bcryptjs")
const adminmodel=require("../models/AdminModel")
const SecurityModel=require("../models/SecurityModel")


HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
adrouter.post("/addsecurity",async(req,res)=>{
    let data=req.body
    let password=data.password
    const hashedPassword=await HashGenerator(password)
    data.password=hashedPassword
    let  loadmodel = new adminmodel(data)
    let result=loadmodel.save()
    res.json({
        status:"success"
    })
})
adrouter.post("/loginsecurity",async(req,res)=>{
    let data=req.body
    let username=data.username
    let inputdata= await adminmodel.findOne({"username":username})
    if(!inputdata)
    {
        return res.json({
            status:"Invalid email"
        })
    }
    else
    {
    let dbpass=inputdata.password
    let orgpass=data.password
    const match=await bcrypt.compare(orgpass,dbpass)
    if(!match)
    {
        return res.json({
            status:"invalid password"
        })
    }
    else
    {
    res.json({
        status:"success","userdata":inputdata
    })}
}
})
adrouter.get("/viewallvisitors",async(req,res)=>{
    let data = await SecurityModel.find()
    .populate("userid","name age mobile address pincode purposeofVisit time -_id").exec()
    res.json(data)

})
adrouter.get("/viewallsecurities",async(req,res)=>{
    let data = await adminmodel.find()
    res.json(data)

})




module.exports=adrouter
