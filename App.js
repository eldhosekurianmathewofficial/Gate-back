const express=require("express")
const cors=require("cors")
const mongoose=require('mongoose')
const adminrouter=require("./controllers/AdminRouter")
const securityrouter=require("./controllers/SecurityRouter")

const exp=express()
exp.use(express.json())
exp.use(cors())
mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/CollgeSecurityDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
exp.use("/api/admin",adminrouter)
exp.use("/api/security",securityrouter)
exp.listen(3001,()=>{
    console.log("Server Running")
})