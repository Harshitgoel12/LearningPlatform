const user=require("../Models/Signup.Model");
const bcrypt=require("bcrypt")

const singupuser= async(req,res)=>{
    try {
        const {firstName,lastName,email,passowrd,confirmpassowrd, accountType}=req.body;
        if([firstName,lastName,email,passowrd,confirmpassowrd, accountType].some((ele,idx)=>ele!="")){
         return res.status(401).json({
            success:false,
            message:"Please fill all the details"
         })
        }
           const result=await user.findOne((email));
           if(result){
            return res.status(401).josn({success:false,messgage:"User is already exist"});
           }
       
           if(passowrd!=confirmpassowrd){
            return res.status(401).json({success:false,message:"Password and confirm password does not match"})
           }

               passoword=await bcrypt.hash(passowrd,10);

           const data=await user.create({
            firstName,lastName,email,password,accountType
           })
           if(data){
            res.status(200).json({success:true,message:"user is created successfully"})
           }

    } catch (error) {
        console.log("something went wrong while registring the user");
        return res.status(500).json({
            success:false,
            message:"something went wrong while registering the user "+ error.message,

        })
    }
}



const loginUser= async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(401).json({success:false,message:"Please fill all the details"});
        }
        const data=await user.findOne(email);
        if(!data){
            return res.status(401).json({success:false,message:"User is not registered"});
        }
        const result=await bcrypt.compare(password,data.password);
        if(!result){
       return res.status(401).json({success:false,message:"please enter the currect password"})
        }

        // create jwt token
        
        return res.status(401).json({success:true,message:"user is login successfully", data})
    } catch (error) {
        
    }
}


module.exports ={
    singupuser
}