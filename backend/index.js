const app=require("./Utils/index");
const connection = require("./config/MongodbConn");


const port=8080;
 const fun=async()=>{
    
   try {
     await connection();
         app.listen(port,()=>{
             console.log("server is running on port 8080");
         })
   } catch (error) {
    console.log("something went wrong")
   } 
}
fun();





