const user=require("../Models/Signup.Model");
const bcrypt=require("bcrypt");
const Otp=require("../Models/Otp.Models")
const sendMail =require("../Utils/SendMail")
const jwt =require("jsonwebtoken");
const cloudinary=require("cloudinary").v2;


const singupuser= async(req,res)=>{
    try {
        
        const {firstName,lastName,email,password,confirmpassword, accountType,otp}=req.body;
        
        if ([firstName, lastName, email, password, confirmpassword, accountType, otp].some((field) => !field)) {
            return res.status(400).json({
              success: false,
              message: "Please fill all the details"
            });
          }
          
       console.log(password,confirmpassword);
           const result=await user.findOne({email});
           if(result){
            return res.status(401).json({success:false,messgage:"User is already exist"});
           }
          
        
           if(password!==confirmpassword){
            return res.status(401).json({success:false,message:"Password and confirm password does not match"})
           }

             const otpvalue=await Otp.findOne({email});
             if(!otpvalue){
                return res.status(401).josn({success:false,message:"OTP is required"});
             }
             if(otp!=otpvalue.otp){
                return res.status(400).json({success:false,message:"Invalid Otp"});
             }
            
               const pass=await bcrypt.hash(password,10);

           const data=await user.create({
            firstName,lastName,email,password:pass,accountType
           })
           if(data){
            res.status(200).json({success:true,message:"user is created successfully"})
           }

    } catch (error) {
        console.log("something went wrong while registring the user",error.message);
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
        const data=await user.findOne({email}).populate({
            path:"myCourse",
            strictPopulate:false,
            populate:{
                path:"Sections",
                populate:{
                    path:"SubSections"
                }
            }
        });
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

          res.status(200).json({success:true,message:"User login successfully",data,token});

        
       
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
       const resu=await Otp.deleteMany({email:email});
       console.log(resu);

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



    cloudinary.config({
        cloud_name:"depx8sahm",
        api_key: "514326572457513",
        api_secret:"viUoj3t1X0bl-Lc5fi9UQvxLyM8"
    });


const updateProfile= async(req,res)=>{
    try {
        const {firstName,lastName,contact,DOB,gender,About}=req.body;
        const image=req.file;
        let result;
        if(image){
        result=await cloudinary.uploader.upload(image.path)
        }
         const id=req.userInfo.id;
      let data;
          data=await user.findByIdAndUpdate(id,{$set:{firstName,lastName,contact,DOB,gender,About}},{new:true}).populate({
            path:"myCourse",
            strictPopulate:false,
            populate:{
                path:"Sections",
                populate:{
                    path:"SubSections"
                }
            }
        });
         if(result){
             data=await user.findByIdAndUpdate(id,{$set:{image:result.secure_url}})
         }
         return res.status(200).json({message:"profile updated successfully",success:true,data})


    } catch (error) {
        console.log("something went wrong while editing the profile of the user", error.message);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


const Logout= async(req,res)=>{
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true, 
            sameSite: 'None',
          });
        
          return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.log("something went wrong while logout the user",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

module.exports ={
    singupuser,
    loginUser,
    sendOTP,
    updateProfile,
    Logout

}