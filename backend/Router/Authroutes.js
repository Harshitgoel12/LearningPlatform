const controller = require("../Controllers/User.Controller");
const verifyuser= require("../middleware/verifyuser");
const upload=require("../middleware/multer")
const express =require("express");

const router=express.Router();


router.route("/send-otp").post(controller.sendOTP);
router.route("/signup").post(controller.singupuser);
router.route("/login").post(controller.loginUser);
router.route("/update-profile").put(upload.single('image'),verifyuser,controller.updateProfile)
router.route("/logout").delete(verifyuser,controller.Logout)


module.exports= router;

