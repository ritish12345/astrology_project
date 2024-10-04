
const mongoose=require("mongoose")
require('dotenv').config();
const uri = 'mongodb://localhost:27017/LoginSignupTutorial';
 // Replace 'your_database_name' with your actual database name

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

const collection=new mongoose.model('collection1',LogInSchema)

module.exports=collection