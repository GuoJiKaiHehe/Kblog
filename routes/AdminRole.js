const express=require("express");
const router=express.Router();
const AdminRole=require(__dirname+"/../models/AdminRole.js");
//角色管理
router.get("/",function(req,res,next){
	AdminRole.getAdminRoles({},function(err,data){
		res.render('houtai/adminrole/role-list',{
			adminroles:data
		});
	})
	// res.send("adminrole");
	/*Role.findAsync().then((data)=>{
		console.log(data+'fffffff');
		res.render("houtai/role/role-list",{
			roles:data
		});
	})*/
	// Role.fin
	/*res.render("houtai/role/role-list",{
			roles:[]
	});*/
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

	AdminRole.findById(id,function(err,data){
		if(err){
			return res.send(err);
		}
		res.render("houtai/adminrole/role-edit",{
			role:data
		});
	})
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
	AdminRole.toUpdate({_id:req.body._id},{roleName:roleName,desc:desc},function(err,data){
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