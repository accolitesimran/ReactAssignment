const User=require("../models/user");
exports.createUser=async(req,res)=>{
    try{
        const {name,email,contactNo}=req.body;
        const response=await User.create({name,email,contactNo});
        res.status(200).json({
            success:true,
            data:response,
            message:"User created successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Invalid input",
            message:err.message
        })
    }
}