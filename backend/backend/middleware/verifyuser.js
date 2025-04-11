const jwt= require("jsonwebtoken");

const verifyuser= async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({success:false,message:"Token is expire"})
        }
        const decodetoken= jwt.verify(token,"asjfdlkjaslkdfjklsadjflsajdfkljsad");
        if(!decodetoken){
            return res.status(401).json({success:false,message:"Token is expire"});
        
        }
        req.userInfo=decodetoken;
    } catch (error) {
        console.log("something went wrong while verifying the token ",error.message);
        return res.status(500).json({success:false,message:"something went wrong while verifying the token"});
    }
}
module.exports= verifyuser;