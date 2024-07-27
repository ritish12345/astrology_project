
const mongoose=require("mongoose")
require('dotenv').config();
const uri=process.env.MONGODB_URI
mongoose.connect(uri)

.then(()=>{
    console.log('mongodb connected');
})
.catch((e)=>{
    console.log(e);
})  

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('Collection1',LogInSchema)

module.exports=collection