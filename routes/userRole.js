const express=require("express");
const router=express.Router();
const UserRole=require(__dirname+"/../models/UserRole.js");
const async=require("async");
//角色管理
router.get("/",function(req,res,next){
	var match={

	},
	select={

	},
	opts={

	}
	UserRole.getUserRoles(match,select,opts,function(err,data){
		if(err){
			res.send("错了");
		}else{
			// console.log(data);
			res.render("houtai/userrole/userrole-list",{
				roles:data.userRoles,
				total:data.total
			})
		}
	})
	
});

router.get("/add",function(req,res,next){
	res.render("houtai/userrole/userrole-add")
});


router.post("/store",function(req,res,next){

	UserRole.create({
		roleName:req.body.roleName,
		desc:req.body.desc
	},function(err,data){
		if(err){
			res.json({
				error:1,
				result:"出错了！"
			})
		}else{
			res.json({
				error:0,
				result:'success'
			})
		}
	})
});

module.exports=router;