const express=require("express");
const router=express.Router();
const AdminRole=require(__dirname+"/../models/AdminRole.js");
const AdminAuth=require(__dirname+"/../models/AdminAuth.js");

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");
const _=require("lodash");

var limit=10;
router.get("/",function(req,res,next){
	// res.send("bbb");
	var page=1;
	if(req.query.page){
		page=parseInt(req.query.page);
	}
	if(isNaN(page)){
		res.send("page is not number");
	}
	var match={

	},
	select={

	},
	opts={
		limit:limit,
		skip:(page-1)*limit,
		
	}

	AdminAuth.getAuths(match,select,opts,function(err,data){
		
		if(err){
			res.json({
				error:1,
				result:"错误！"
			});
		}else{
			var totalPage=Math.ceil(data.total/limit);
			var pages=lib.getPages(page, limit, data.total,req.query);
			res.render("houtai/adminauth/admin-auth-list",{
			 	title:"管理员权限",
			 	adminAuths:data.adminAuths,
			 	total:data.total,
			 	pages:pages
			 })
		}
	})
	 
});

router.get("/add",function(req,res){
	// res.send("bbb");
	res.render("houtai/adminauth/admin-auth-add",{
	 	title:"管理员权限添加"
	 })
});

router.post("/store",function(req,res){
	AdminAuth.storeAuth(req.body,function(err,data){
		if(err){
			res.json({
				error:1,
				result:data
			})
		}else{
			res.json({
				error:0,
				result:'success'
			})
		}
	})
});

router.get("/getauths",function(req,res){

	// AdminAuth.getAuths(roles)
});




module.exports=router;