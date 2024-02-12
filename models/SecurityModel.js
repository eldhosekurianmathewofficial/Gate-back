const mongoose=require("mongoose")
const visitorSchema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"securities"
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    purposeofVisit:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    },

})
module.exports=mongoose.model("visitors",visitorSchema)