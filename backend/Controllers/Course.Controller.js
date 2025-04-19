const Course= require("../Models/Course");
const cloudinary=require("cloudinary").v2;


const createCourse= async(req,res)=>{
    try {
        const {Title,Description,Benefits,Requirements,Tags,Category,Price}=req.body;
        if(!Title||!Description||!Benefits||!Requirements||!Tags||!Price){
             return res.status(401).json({success:false,message:"All the field are required"});
        }
        const Thumbnail=req.file;
        if(!Thumbnail){
            return res.status(401).json({success:false,message:"All the Fileds are required"});
        }
         console.log(Thumbnail);
        const resp=await cloudinary.uploader.upload(Thumbnail.path);
        console.log(resp);
        
      const result=  await Course.create({
            Title,Tags,Description,Thumbnail:resp.secure_url,Benefits,Requirements,Price,Category
        })
        return res.status(200).json({success:true,message:"Course Details added Successfully",result});
    } catch (error) {
        console.log("something went wrong while adding course details",error.message);
        return res.status(500).json({success:false,message:"Internal Server Error"
        })
    }
}

module.exports={
    createCourse
}