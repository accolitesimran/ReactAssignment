const User=require('../models/user');
exports.getUser=async(req,res)=>{
    try{
        const users=await User.find({});
        res.status(200).json({
            success:true,
            data:users,
            message:"All users fetched"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.getUserById=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await User.findById({_id:id});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User could not be found"
            })
        }
        res.status(200).json({
            success:true,
            data:user,
            message:"User fetched successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}