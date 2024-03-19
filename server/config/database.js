const mongoose=require("mongoose");

require("dotenv").config(); 

exports.connect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
    })
    .then(()=>{
        console.log("DB connected successfully")
    })
    .catch((err)=>{
        console.log("DB connection failed");
        console.error(err);
        process.exit(1);
    })
}