const mongoose=require("mongoose");

const CourseSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true
    },
    Benefits:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Requirements:{
        type:[String],
        required:true
    },
    Tags:{
        type:[String],
        required:true
    },
    Thumbnail:{
        type:String,
        required:true
    },
    Category:{
        type:String,
    },
    Sections:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Section"
    }]
});

module.exports=mongoose.model("Course",CourseSchema);