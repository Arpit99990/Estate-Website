import express from "express";

const postRoute = express.Router();

postRoute.get("/test", (req,res)=>{
    console.log("router works!");
})

postRoute.post("/test", (req,res)=>{
    console.log("router works!");
})

postRoute.put("/test", (req,res)=>{
    console.log("router works!");
})

postRoute.delete("/test", (req,res)=>{
    console.log("router works!");
})

export default postRoute;