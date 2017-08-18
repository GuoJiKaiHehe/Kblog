const express=require("express");
const router=express.Router();
const Menu=require(__dirname+"/../models/Menu.js");
//用于储存多模块名与其之间的关联；

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");



router.get("/",function(req,res){
	res.render("houtai/menu/menu-list",{
		title:"菜单列表"
	})
});
router.get("/add",function(req,res){
	res.render("houtai/menu/menu-add",{
		
	})
});

module.exports=router;