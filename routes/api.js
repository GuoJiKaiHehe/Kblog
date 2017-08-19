const express=require("express");
const router=express.Router();
const Menu=require(__dirname+"/../models/Menu.js");
//用于储存多模块名与其之间的关联；

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");

const AdminRole=require(__dirname+"/../models/AdminRole.js");
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
router.get("/ownerRoleUsers",function(req,res){
	var _id=req.query._id;

	AdminRole.ownerRoleUsers(_id,function(err,data){
		if(err){
			res.json({
				error:1,
				result:data
			})
		}else{
			// console.log(data);
			res.json({
				error:0,
				result:data
			})
		}
		
	});
	
});
module.exports=router;