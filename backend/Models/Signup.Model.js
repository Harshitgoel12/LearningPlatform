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
    }

})

const user= mongoose.model("User","signupSchema");

module.exports=user;

