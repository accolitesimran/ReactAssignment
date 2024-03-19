const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:20
        },
        email:{
            type:String,
            required:true,
        },
        contactNo:{
            type:Number,
            required:true
        },
    }
)
module.exports=mongoose.model("User",userSchema);