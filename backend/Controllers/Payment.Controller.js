const razorpayInstance = require('../Utils/razorpay');
const Course= require("../Models/Course");
const User= require("../Models/Signup.Model")
const {courseEnrollmentEmail}= require("../mail/templates/courseEnrollmentEmail");
const sendMail = require("../Utils/SendMail")
const crypto= require("crypto")
const payment= async(req,res)=>{
    try {
        const {cartItems, amount, currency } = req.body;
    if(cartItems.length==0){
        return res.status(401).json({success:false,message:"No course is available for payment"})
    }

        const options = {
            amount: amount * 100, 
            currency: currency || 'INR',
        };
        const userid=req.userInfo.id;
        for(let it of cartItems){
            const id= it._id;
            const course = Course.findById({_id:id});
            if(!course){
                return res.status(401).json({success:false,message:"This course is invalid "});
            }
            console.log(course);
            const isPresent = course.studentEnrolled?.includes(userid);
            if(isPresent){
                return res.status(401).json({success:false,message:"User is Already Enrolled"});
            }
        }
       

        const order = await razorpayInstance.orders.create(options);
        console.log(order)
        res.status(200).json({success:true,message:"everything is perfect",order});

    } catch (error) {
        console.log("something went wrong while creating an order",error.message);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}



const verifyPayment = async (req, res) => {
        const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;
        const {courses} = req.body;
        const userId = req.userInfo?.id;
console.log("user id ",userId);

        if(!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
            return res.status(400).json({
                success:false,
                message:'Payment details are incomplete',
            });
        }

        let body = razorpay_order_id + "|" + razorpay_payment_id;

        const enrolleStudent = async (courses, userId) => {
            if(!courses || !userId) {
                return res.status(400).json({
                    success:false,
                    message:'Please provide valid courses and user ID',
                });
            }
                    try{
                        for(const course of courses){
                        console.log("verify courses=",course);
                        // const course = await Course.findByIdAndUpdate(
                        //     course_id,
                        //     {$push:{studentEnrolled:userId}},
                        //     {new:true}
                        // );
                        //update the user
                        const user = await User.updateOne(
                            {_id:userId},
                            {$push:{courses:course}},
                            {new:true}
                        );
                        //set course progress
                        // const newCourseProgress = new CourseProgress({
                        //     userID: userId,
                        //     courseID: course_id,
                        //   })
                        //   await newCourseProgress.save()
                    
                          //add new course progress to user
                        //   await User.findByIdAndUpdate(userId, {
                        //     $push: { courseProgress: newCourseProgress._id },
                        //   },{new:true});
                        //send email
                        const recipient = await User.findById(userId);
                        console.log("recipient=>",course);
                        const courseName = course?.Title;
                        const courseDescription = course?.Description;
                        const thumbnail = course?.Thumbnail;
                        const userEmail = recipient?.email;
                        const userName = recipient.firstName + " " + recipient.lastName;
                        const emailTemplate = courseEnrollmentEmail(courseName,userName, courseDescription, thumbnail);
                        await sendMail(
                            userEmail,
                            `You have successfully enrolled for ${courseName}`,
                            null,
                            emailTemplate,
                        );
                        }
                        return res.status(200).json({
                            success:true,
                            message:'Payment successful',
                        });
                    }
                    catch(error) {
                        console.error(error);
                        return res.status(500).json({
                            success:false,
                            message:error.message,
                        });
                    }
                
            }

        try{
            //verify the signature
            const generatedSignature = crypto.createHmac("sha256", "f0RsIWcoNd88MZOA6eRqqexw").update(body.toString()).digest("hex");
            if(generatedSignature === razorpay_signature) {
                await enrolleStudent(courses, userId);
            }

        }
        catch(error) {
            console.error(error);
            return res.status(500).json({
                success:false,
                message:error.message,
            });
        }

     
    }


module.exports ={
    payment,
    verifyPayment

}