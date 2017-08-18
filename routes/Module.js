const express=require("express");
const router=express.Router();
const Module=require(__dirname+"/../models/Module.js");
//用于储存多模块名与其之间的关联；

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");
const gm=require("gm");


router.get("/",function(req,res){
	
});




module.exports=router;