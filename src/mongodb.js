
const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://ritishbansal123:ritish098@astrology.abdcmbl.mongodb.net/?retryWrites=true&w=majority&appName=Astrology")

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