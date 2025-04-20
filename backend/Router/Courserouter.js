const Course=require("../Models/Course");
const express=require("express");
const router=express.Router();
const CourseController=require("../Controllers/Course.Controller");
const verifyuser = require("../middleware/verifyuser");
const upload = require("../middleware/multer");

router.route("/add-course").post(verifyuser,upload.single("Thumbnail"),CourseController.createCourse);
router.route("/create-section").post(verifyuser,CourseController.addSection);
router.route("/delete-section").delete(CourseController.deleteSection)

module.exports=router;