const express=require("express");
const Authrouter= require("../Router/Authroutes")
const Courserouter=require("../Router/Courserouter");
const cors= require("cors")
const cookieParser = require("cookie-parser");
const app=express();
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



 app.use("/api/v1",Authrouter);
 app.use("/api/v1",Courserouter)

module.exports= app;