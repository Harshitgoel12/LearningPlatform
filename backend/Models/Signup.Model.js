const mongoose= require("mongoose");
const signupSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
         type:String,
         required:true,
         
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        required:true,
    },

    
    image:{
        type:String,
        default:'NA'
    },
    gender:{
        type:String,
        default:'NA'
    },
    contact:{
       type:String,
       default:'NA'
    },
    About:{
        type:String,
        default:'NA'
    },
    DOB:{
        type:String,
        default:Date.now()
    }
   

})

const user= mongoose.model("User",signupSchema);

module.exports=user;

