const mongoose= require("mongoose");
require("dotenv").config();

async function connection(){
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/LearningPlatform");
    console.log("database base connection establish successfully")
    }
    catch(error){
        console.log("something went wrong while connecting to database",error);
        process.exit(1);
    }
}
module.exports=connection;