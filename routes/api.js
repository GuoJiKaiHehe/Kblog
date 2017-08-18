const express=require("express");
const router=express.Router();
const Menu=require(__dirname+"/../models/Menu.js");
//用于储存多模块名与其之间的关联；

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");


router.get("/getMenus",function(req,res){
	Menu.getMenus({},function(err,data){
			if(err){
			res.json({
				error:1,
				result:data
			})
		}else{
			var d=lib.fenlei(data);
			res.json({
				error:0,
				result:d
			})
		}

	});
});

module.exports=router;