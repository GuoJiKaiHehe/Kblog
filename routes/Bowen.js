const express=require("express");
const router=express.Router();
const AdminRole=require(__dirname+"/../models/AdminRole.js");
const Admin=require(__dirname+"/../models/Admin.js");
const formidable=require("formidable");
const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");
const gm=require("gm");


router.get("/",function(req,res){
	res.render("houtai/bowen/bowen-list");
});


router.get("/add",function(req,res){
	res.render("houtai/bowen/bowen-add");
});


module.exports=router;