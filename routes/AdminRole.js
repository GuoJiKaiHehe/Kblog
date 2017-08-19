const express=require("express");
const router=express.Router();
const AdminRole=require(__dirname+"/../models/AdminRole.js");
const AdminAuth=require(__dirname+"/../models/AdminAuth.js");
const async=require("async");
//角色管理
router.get("/",function(req,res,next){
	// res.send("bbb");
	AdminRole.getAdminRoles({},function(err,data){
		if(err){
			res.send(data);
		}
		// console.log(data);
		res.render('houtai/adminrole/role-list',{
			adminroles:data.adminroles,
			total:data.total
		});
	})
	
});

//角色管理
router.get("/add",function(req,res,next){

	res.render("houtai/adminrole/role-add",{
		
	});
});

//储存角色；
router.post("/store",function(req,res,next){
	// res.send(req.body);
	var roleName=req.body.roleName;
	var desc=req.body.desc;
	AdminRole.storeAdminRole(req,(err,data)=>{
		if(err){
			res.json({error:1,result:data});
			return;
		}
		res.json({
			error:0,
			result:data
		});
	})
	/*Role.findOne({roleName:roleName},'',{},function(err,role){
		if(err){
			return res.json({error:1,result:"出错！"+err});
		}
		// res.json(role);
		if(role){
			return res.json({error:1,result:"角色名称已存在！"});
		}else{
			var roleEntity=new Role({
				roleName:roleName,
				desc:desc
			});
			roleEntity.save(function(err,data){
				if(err){
					return res.json({error:1,result:"出错！"+err});
				}else{
					return res.json({error:0,result:'success'});
				}
			});
		}

	})*/
});
// ownerRoleUsers
//角色管理
router.get("/ownerRoleUsers",function(req,res,next){
	/*Role.ownerRoleUsers(req.query._id,function(data){
			res.json({
				result:data
		});
	});*/
	
});


//角色管理
router.get("/edit",function(req,res,next){
	
	var id=req.query.id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	async.series({
		adminRole:function(cb){
			AdminRole.findById(id,function(err,data){
				if(err){
					return res.send(err);
					cb(err);
				}else{
					cb(null,data);
				}
				
			})
		},
		getAuths:function(cb){
			AdminAuth.getAuthsAndGroupByModel({},{},{},function(err,data){
					if(err){
						cb(err);
					}else{
						cb(null,data);
					}
			});
		}
	},function(err,result){

		if(err){
			res.send(err);
		}else{
			res.render("houtai/adminrole/role-edit",{
				role:result.adminRole,
				modelAuths:result.getAuths
			});
		}	
	});
	
	// res.send('333');
});

//角色保存
router.post("/save",function(req,res,next){

	var _id=req.body._id;
	// res.send(id);
	if(!_id){
		res.send("id不存在！");
	}
	// Article.findByIdAndUpdate({_id:id},{$set:{}})
	var roleName=req.body.roleName;
	var desc=req.body.desc;
	var auths=req.body.rolesid.split('|');
	// res.send(auths+'----------------');
	AdminRole.toUpdate({_id:req.body._id},{
		roleName:roleName,
		desc:desc,
		auths:auths
	},function(err,data){
		if(err){
			res.json({error:1,result:data});
		}else{
			res.json({error:0,result:"success"});
		}
	});

});

router.post("/del",function(req,res,next){

	var _id=req.body._id;
	// res.send(id);
	if(!_id){
		res.send("id不存在！");
	}

	// Article.findByIdAndUpdate({_id:id},{$set:{}})
	AdminRole.del({_id:_id},function(err,data){
		// data 是一个角色 document;
		if(err){
			return res.json({error:1,result:data});
		}
		return res.json({error:0,result:data});
	})
});

module.exports=router;