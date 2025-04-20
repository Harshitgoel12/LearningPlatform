const mongoose= require("mongoose");

const SubSectionSchema= new mongoose.Schema({
    Lecture:{
        type:String,
        required:true,
    },
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("SubSection", SubSectionSchema);