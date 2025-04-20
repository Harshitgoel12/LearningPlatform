const Course= require("../Models/Course");
const cloudinary=require("cloudinary").v2;
const SectionModel=require("../Models/Section");
const SubSection =require("../Models/Subsection")


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
const addSection= async(req,res)=>{
    try {
        const {section,courseId}=req.body;
       
        if(!section||!courseId){
            return res.status(401).json({success:false,message:"All the field are required"});
        }
        const result=await SectionModel.findOne({Section:section});
        if(result){
            return res.status(401).json({success:false,message:"This section is already created"});
        }

           const ifcourse=await Course.findById(courseId);
           if(!ifcourse){
            return res.status(401).json({success:false,message:"Please First Create a course"});
           }

         const data=await SectionModel.create({
            Section:section
         })
//  update course
        const updatedcourse=await Course.findByIdAndUpdate(courseId,
            {
                $push:{
                    Sections:data._id
                }
            },
        {new:true}).populate({
            path: "Sections",
            populate: {
              path: "SubSections"
            }
          })
        // "Sections""SubSections"

         console.log("yha to theek hai bhai ",updatedcourse)
         return res.status(200).json({success:true,message:"sections is create successfully",updatedcourse})

    } catch (error) {
        console.log("something went wrong while adding the section",error.message);
        return res.status(500).json({success:false,message:"something went wrong while creating the section"});
    }
}

module.exports={
    createCourse,
    addSection
}