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
	};
	if(req.query.keyword){
		var reg=new RegExp(req.query.keyword,'i');
		match.$or=[
			{authName:{$regex:reg} },
			{refmodel:{$regex:reg}}
		];
		// match.createAt={$gt}

	};
	console.log(match);
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
			 	pages:pages,
			 	keyword:req.query.keyword
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
router.get('/edit',function(req,res){
	var _id=req.query.id;
	if(!_id){
		res.send("_id不存在@");
	}
	AdminAuth.findOne({_id:_id},function(err,data){
		if(err){
			res.send("服务器出错！");
		}else{
			if(data){
				// console.log(data);
				res.render('houtai/adminauth/admin-auth-edit',{
					adminAuth:data
				})
			}else{
				res.send("_id有误！");
			}
		}
	});
});

router.post("/save",function(req,res){
	var _id=req.body.id;
	if(!_id){
		res.send("id 不存在");
	}

	AdminAuth.findOneAndUpdate({_id:_id},{$set:{
		authName:req.body.authName,
		action:req.body.action,
		refmodel:req.body.refmodel,
		type:req.body.type,
		desc:req.body.desc
	}},function(err,data){
		if(err){
			res.json({
				error:1,
				result:"修改出错@"
			})
		}else{
			res.json({
				error:0,
				result:"success"
			})
		}
	})
});

router.post("/del",function(req,res){
	var _id=req.body.id;
	if(!_id){
		res.send("id 不存在");
	}
	AdminAuth.findOneAndRemove({_id:_id},function(err,adminauth){
		if(!err){
			res.json({
				error:0,
				result:adminauth
			})
		}else{
			res.json({
				error:1,
				result:err.message
			})
		}
	})
});

router.get("/getauths",function(req,res){

	// AdminAuth.getAuths(roles)
});




module.exports=router;