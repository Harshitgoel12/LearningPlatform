const controller = require("../Controllers/User.Controller");
const verifyuser= require("../middleware/verifyuser");
const express =require("express");
const router=express.Router();


router.route("/send-otp").post(controller.sendOTP);

module.exports= router;

