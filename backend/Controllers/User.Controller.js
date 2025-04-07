const user=require("../Models/Signup.Model");
const bcrypt=require("bcrypt");
const Otp=require("../Models/Otp.Models")
const sendMail =require("../Utils/SendMail")
const jwt =require("jsonwebtoken");

const singupuser= async(req,res)=>{
    try {
        const {firstName,lastName,email,password,confirmpassowrd, accountType,otp}=req.body;
        if([firstName,lastName,email,passowrd,confirmpassowrd, accountType,otp].some((ele,idx)=>ele!="")){
         return res.status(401).json({
            success:false,
            message:"Please fill all the details"
         })
        }
           const result=await user.findOne((email));
           if(result){
            return res.status(401).josn({success:false,messgage:"User is already exist"});
           }
       
           if(password!=confirmpassowrd){
            return res.status(401).json({success:false,message:"Password and confirm password does not match"})
           }

             const otpvalue=await Otp.findOne({email});
             if(!otpvalue){
                return res.status(401).josn({success:false,message:"OTP is required"});
             }
             if(otp!=otpvalue.otp){
                return res.status(400).json({success:false,message:"Invalid Otp"});
             }
            
               password=await bcrypt.hash(password,10);

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
          const payload={
         id:data._id,
         email:data.email,
         accountType:data.accountType
          }
          const token=await jwt.sign(payload,"asjfdlkjaslkdfjklsadjflsajdfkljsad",{
            expiresIn:"2d"
          })
          res.cookie("token", token, {
            httpOnly: true, 
            secure: false,  
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "lax" 
          });

          res.status(200).json({success:true,message:"User login successfully",payload});

        
       
    } catch (error) {
        console.log("something went while login the user ",error.message)
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


//send otp

const sendOTP= async(req,res)=>{
 try {
console.log(req.body);
       const {email}=req.body;
       if(!email){
        return res.status(401).json({success:false,message:"email address is required"});
       }
      
       const otp=Math.floor(100000 + Math.random() * 900000);
    //    const resu=await Otp.deleteMany({email:email});
    //    console.log(resu);

       const result =await Otp.create({
        email,otp
       })
      
       sendMail(email,"OTP varification code ",otp);
       return res.status(200).json({success:true,message:"Otp Send successfully"})
 } catch (error) {
    console.log("something went wrong while sending the otp",error.message)
    return res.status(500).json({success:false,message:"something went wrong while sending the otp to the user"});
 }

}


module.exports ={
    singupuser,
    loginUser,
    sendOTP

}