const express=require("express");
const router=express.Router();
const Role=require(__dirname+"/../models/role.js");
//角色管理
router.get("/",function(req,res,next){
	Role.findAsync().then((data)=>{
		console.log(data+'fffffff');
		res.render("houtai/role/role-list",{
			roles:data
		});
	})
	// Role.fin
	/*res.render("houtai/role/role-list",{
			roles:[]
	});*/
});

//角色管理
router.get("/add",function(req,res,next){
	res.render("houtai/role/role-add");
});

//储存角色；
router.post("/store",function(req,res,next){
	
	var roleName=req.body.roleName;
	var desc=req.body.desc;
	Role.findOne({roleName:roleName},'',{},function(err,role){
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

	})
});
// ownerRoleUsers
//角色管理
router.get("/ownerRoleUsers",function(req,res,next){
	Role.ownerRoleUsers(req.query._id,function(data){
			res.json({
				result:data
		});
	});
	
});


//角色管理
router.get("/edit",function(req,res,next){
	var id=req.query.id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	// console.log(Role.findOne);
	Role.findById(id,function(err,data){
		if(err){
			return res.send(err);
		}

		res.render("houtai/role/role-edit",{
			role:data
		});
	})
	// res.send('333');
});

//角色保存
router.post("/save",function(req,res,next){
	var id=req.body._id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	// Article.findByIdAndUpdate({_id:id},{$set:{}})
	var roleName=req.body.roleName;
	var desc=req.body.desc;
	Role.findByIdAndUpdate({_id:id},{$set:{roleName:roleName,desc:desc}},function(err,data){
		// data 是一个角色 document;
		if(err){
			return res.json({error:1,result:err});
		}
		return res.json({error:0,result:data});
	})
});

router.post("/del",function(req,res,next){
	var id=req.body._id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	// Article.findByIdAndUpdate({_id:id},{$set:{}})
	Role.remove({_id:id},function(err,data){
		// data 是一个角色 document;
		if(err){
			return res.json({error:1,result:err});
		}
		return res.json({error:0,result:data});
	})
});

module.exports=router;