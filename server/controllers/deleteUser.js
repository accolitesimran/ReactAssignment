const User=require("../models/user");
exports.deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}