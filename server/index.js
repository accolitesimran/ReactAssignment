const express=require("express");
const app=express();
const cors=require('cors');

app.use(cors());
app.use(express.json());

require('dotenv').config();
const PORT=process.env.PORT || 5000

require('./config/database').connect();

// const User=require('./models/user');
// app.get('/getUser/:id',(req,res)=>{
//     const id=req.params.id;
//     User.findById({id})
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })
const users=require('./routes/users');
app.use("/api/v1",users);

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
})
app.get('/', (req, res) => {
    res.send('hello world')
  })

