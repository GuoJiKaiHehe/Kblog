const express=require("express");
const router=express.Router();
const User=require(__dirname+"/../models/user.js");
const UserRole=require(__dirname+"/../models/userRole.js");
const lib=require(__dirname+'/../lib/index.js');
const util=require("util");

const Person=require(__dirname+"/../models/Person.js");
//角色管理
router.get("/",function(req,res,next){
	/*User.findAsync({}).then((data)=>{
		// console.log(data+'fffffff');
		
	})*/
	User.find({}).populate({path:'pid',select:'',optons:{}}).populate("roles").exec((err,data)=>{
		// console.log(data);
		res.render("houtai/user/user-list",{
			 users:data
		});
	})

		

	// res.send("333");
	// User.fin
	/*res.render("houtai/user/user-list",{
			users:[]
	});*/
});

//角色管理
router.get("/add",function(req,res,next){
	UserRole.findAsync().then((data)=>{
		res.render("houtai/user/user-add",{
			roles:data
		});
	})
	
});

//储存用户；
router.post("/store",function(req,res,next){	
	 // console.log('body'+req.body);
	 // res.send("333"+new User().tt);
	User.register(req.body,(err,data)=>{
		// console.log(err);
		if(err){
			return res.json({error:err,result:data});
		}
		return res.json({error:err,result:data}); 
	});
	
});
// ownerUserUsers
//角色管理
router.get("/ownerUserUsers",function(req,res,next){
	User.ownerUserUsers(req.query._id,function(data){
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
	User.findOne({_id:id}).populate({path:'pid',select:'',optons:{}}).populate("roles").exec((err,data)=>{
		//再获取所有的role
		UserRole.findAsync().then((allRoles)=>{
			var selectedArr=[];
			allRoles.forEach((item,index)=>{
				data.roles.forEach((item2,index2)=>{
					
					if(item._id.toString()==item2._id.toString()){
						selectedArr.push(index);
					}
				})
			});
			res.render("houtai/user/user-edit",{
				_id:id,
				user:data.pid,
				roles:data.roles,
				allRoles:allRoles,
				selectedArr:selectedArr
			})
		})
			
	})
});


//角色保存
router.post("/save",function(req,res,next){
	var id=req.body._id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	// 这里做验证；
	if(req.body.password!='' && req.body.password2!=''){
		if(req.body.password!=req.body.password2){
			res.json({error:1,result:'密码与确认密码不相等'})
		}else{
			//不做处理；
		}
	}


	//id;account  nick  sex password2 password; roles intro
	User.findOne({_id:id}).populate({path:'pid',select:'',optons:{}}).exec((err,data)=>{
		
		data.pid.account=req.body.account;
		data.pid.nick=req.body.nick;
		if(req.body.password!='' && req.body.password2!=''){
			data.pid.pass=lib.sha1(req.body.password);
		}
		data.pid.sex=req.body.sex;
		data.roles=util.isArray(req.body.roles)?req.body.roles:[req.body.roles];
		data.pid.intro=req.body.intro;
		data.pid.save((err,data)=>{
			if(err){
				res.json({error:1,result:err.message});
			}else{
				data.roles
			}
		});
		data.save((err,data)=>{
			if(err){
				res.json({error:1,result:err.message});
			}else{
				res.json({error:0,result:data});
			}
		});
	});
});

router.post("/del",function(req,res,next){
	var id=req.body._id;
	// res.send(id);
	if(!id){
		res.send("id不存在！");
	}
	User.findOne({_id:id},function(err,data){
		if(err){
			return res.json({error:1,result:err.message});
		}else if(data){
			// return res.json({error:0,result:data});
			Person.remove({_id:data.pid},function(err,data){
				if(err) {
					return  res.json({error:err.message,result:'删除出错'});
				}
				if(data){
					User.remove({_id:id},function(err2,data2){
						if(err) {
							return res.json({error:1,result:err2.message});
						}
						res.json({error:0,result:'成功！'});
					});
				}
			});
		}else{
			return res.json({error:1,result:'不存在！'});
		}		
	});
	
});
router.post('/disabled',function(req,res,next){
	Person.disabled(req.body.id,function(err,data){
		if(err){
			res.json({error:1,result:data});
		}else{
			res.json({error:0,result:data});
		}
	})
});
router.post('/enabled',function(req,res,next){
	Person.enabled(req.body.id,function(err,data){
		if(err){
			res.json({error:1,result:data});
		}else{
			res.json({error:0,result:data});
		}
	})
});
module.exports=router;

// res.send(req.body);
	/*
	var userName=req.body.userName;
	var desc=req.body.desc;
	User.findOne({userName:userName},'',{},function(err,user){
		if(err){
			return res.json({error:1,result:"出错！"+err});
		}
		// res.json(user);
		if(user){
			return res.json({error:1,result:"角色名称已存在！"});
		}else{
			var userEntity=new User({
				userName:userName,
				desc:desc
			});
			userEntity.save(function(err,data){
				if(err){
					return res.json({error:1,result:"出错！"+err});
				}else{
					return res.json({error:0,result:'success'});
				}
			});
		}

	})*/