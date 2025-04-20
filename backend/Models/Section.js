const mongoose= require("mongoose");
const sectionSchema= new mongoose.Schema({
    Section:{
        type:String,
        required:true,
    },
    SubSections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }]

})

module.exports=mongoose.model("Section",sectionSchema);