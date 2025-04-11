const express=require("express");
const router= require("../Router/Authroutes")
const cors= require("cors")

const app=express();
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 app.use("/api/v1",router);

module.exports= app;