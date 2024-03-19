const User=require('../models/user');

exports.updateUser=async(req,res)=>{
    try{
        const id=req.params.id;
        console.log("Working fine",id);
        const {name,email,contactNo}=req.body;
        const user=await User.findByIdAndUpdate({_id:id},{name,email,contactNo});
        res.status(200).json({
            success:true,
            data:user,
            message:"User updated successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}