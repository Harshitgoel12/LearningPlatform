const Course=require("../Models/Course");
const express=require("express");
const router=express.Router();
const CourseController=require("../Controllers/Course.Controller");
const verifyuser = require("../middleware/verifyuser");
const upload = require("../middleware/multer");

router.route("/add-course").post(verifyuser,upload.single("Thumbnail"),CourseController.createCourse);
router.route("/create-section").post(verifyuser,CourseController.addSection);
router.route("/delete-section").delete(verifyuser,CourseController.deleteSection);
router.route("/create-subsection").post(verifyuser,upload.single("Lecture"),CourseController.createSubsection);
router.route("/publishcourse").post(verifyuser,CourseController.PublishCourse)


router.route("/getcourse/:category").get(verifyuser,CourseController.getCourses);
router.route("/findallCourses/:course").get(verifyuser,CourseController.getAllCourses);
router.route("/ParticularCourseDetail/:id").get(verifyuser,CourseController.getSingleCourse)
module.exports=router;