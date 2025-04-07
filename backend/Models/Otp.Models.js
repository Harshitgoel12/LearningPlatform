const mongoose =require("mongoose");
const OtpSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model("OTP",OtpSchema);