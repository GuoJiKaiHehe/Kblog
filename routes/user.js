const express=require("express");
const router=express.Router();
const UserRole=require(__dirname+"/../models/UserRole.js");
const User=require(__dirname+"/../models/User.js");
const formidable=require("formidable");
const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");
const gm=require("gm");

const limit=5;

router.get("/",function(req,res,next){
	// res.send(req);
	// res.send(req.originalUrl);
	// res.send(req.query);
	var page=1;
	if(req.query.page){
		page=parseInt(req.query.page);
	}
	if(isNaN(page)){
		res.send("page is not number");
	}
	var match={

	};
	var opts={
		limit:limit,
		skip:(page-1)*limit,
		sort:{
			createAt:-1
		}
	};

	if(req.query.keyword){
		var reg=new RegExp(req.query.keyword,'i');
		match.$or=[
			{nick:{$regex:reg} },
			{account:{$regex:reg}}
		];

		// match.createAt={$gt}

	};
	if(req.query.s){
		var  s=parseInt(req.query.s);
		
		if(!isNaN(s)){
			match.createAt={};
			match.createAt.$gt=s;
			 console.log(match);
		}
		

	}

	// console.log(match);
	if(req.query.max){
		var end=parseInt(req.query.max);
		if(!isNaN(end)){
			match.createAt.$lt=end;
		}
	}
	
	var select={

	};
	console.log(page);
	User.getUsers(match,select,opts,(err,data)=>{
			// console.log(users);
			var totalPage=Math.ceil(data.total/limit);
			// if(totalPage){}
			// if(page>totalPage){
			// 	res.send("page gt totalPage");
			// }
			var pages=lib.getPages(page, limit, data.total,req.query);
			res.render("houtai/user/user-list",{
				users:data.users,
				pages:pages,
				keyword:req.query.keyword,
				mindate:req.query.s? new Date(parseInt(req.query.s)).Format('yyyy-MM-dd'):'',
				maxdate:req.query.max ? new Date(parseInt(req.query.max)).Format('yyyy-MM-dd'):''
			})
	})
	
});
/*var result=User.find({ 
		$or:[
		 	{nick:{$regex:reg}},
            { email:{$reg:reg}}
            ],
           {
    			password:'',
           },
	{
	sort:{_id:-1},
	limit:100;
}
})*/



router.get("/add",function(req,res){
	// res.send("333");
	UserRole.getUserRoles({},{},{},function(err,data){
		res.render("houtai/user/user-add",{
			userRoles:data.userroles
		})
	});
	
})

/**
{ avatarfile: 
  File {
    domain: null,
    _events: {},
    _eventsCount: 0,
    _maxListeners: undefined,
    size: 620888,
    path: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\upload_6318fdb97399f4689cdc7d6cc94fba87',
    name: 'Tulips.jpg',
    type: 'image/jpeg',
    hash: null,
    lastModifiedDate: 2017-08-12T04:08:56.698Z,
    _writeStream: [Object] } } }
*/
router.post("/store",function(req,res){


	var form=new formidable.IncomingForm();
	 form.maxFieldsSize = 2 * 1024;
	 form.keepExtensions=true; //保持跨站名；
	 // form.uploadDir
	 form.encoding='utf-8';
	form.parse(req,function(err,fields,files){
		// res.send(files);
		if(!files){
		res.json({error:1,result:"file not find"});
		}
		// files.avatarfile.name 
		//files.avarfile.path;
		// res.send(files);
		if(!files){
			res.json({error:1,result:"file not find"});
		}
		if(err){
			res.json({error:1,result:err.message});
		}else{
			 if(files){

				 if(!files.avatarfile.type.match(/image/g)){
				 	res.json({error:1,result:"不是图片类型！"});
				 }
				 var avatarname=lib.unique()+files.avatarfile.name;
				 var newpath=config.upAvatarPath+'/'+avatarname
				 var write=fs.createWriteStream(newpath);
				 var read=fs.createReadStream(files.avatarfile.path);
				 read.on("data",function(d){
				 	write.write(d);
				 })
				 read.on("error",function(err){
				 	res.send(err)
				 })
				 read.on("end",function(){
				 	write.end();
				 	//修改图片大小；	
				 	// 
				 	lib.resize(newpath,50,50,newpath,function(err,resiData){
				 		if(!err){
				 				fields.avatar=avatarname;
							 	User.addUser(fields,function(err,data){
								if(err){
									res.json({error:1,result:data});
								}else{
									res.json({error:0,result:'success'});
								}
							})
				 		}
				 	})
				 		
				 })
				}else{
					User.addUser(fields,function(err,data){
						if(err){
							res.json({error:1,result:data});
						}else{
							res.json({error:0,result:'success'});
						}
					})
				}
			
		}
		
	})




})

router.get("/edit",function(req,res){
	if(!req.query.id){
		res.send("id不存在！");
	}
	UserRole.getUserRoles(function(err,data){
		
		User.findOne({_id:req.query.id},(err,user)=>{
			if(err){
				res.json({error:1,result:err.message});
			}
			var selectedRoles=[];
			user.roles.forEach((item)=>{
				selectedRoles.push(item.toString());
			});
			res.render("houtai/user/user-edit",{
				userRoles:data,
				user:user,
				selectedRoles:selectedRoles
			})
		})
		
	});
});
router.post("/save",function(req,res){

	if(!req.body._id){
		res.json({error:1,result:'id不存在！'});
	}
	var obj=req.body;
	
	User.findByIdAndUpdate(req.body._id,{$set:{
		account:obj.account,
		pass:obj.pass,
		nick:obj.nick,
		phone:obj.phone||'',
		sex:obj.sex,
		roles:obj.roles.split("|"),
		intro:obj.intro,
		email:obj.email,
		avatar:obj.avatar
	}},function(err,data){
		if(err){
			res.json({error:1,result:err.message});
		}else{
			res.json({error:0,result:data})
		}
	})
	
});
router.post("/del",function(req,res){
	var _id=req.body._id;
	if(!_id){
		res.json({error:1,result:'_id 不存在!'});
	}
	User.remove({_id:_id},function(err,data){
		if(err){
			res.json({error:1,result:err.message});
		}else{
			res.json({error:0,result: data});
		}
	});
});

router.post("/disable",function(req,res){


	var _id=req.body._id;
	if(!_id){
		res.json({
			error:1,
			result:"id 不存在！"
		})
		return;
	}

	User.updateStatus('disable',{"_id":_id},function(err,data){
		if(err){
			res.json({
				error:1,
				result:"服务器出错！"
			})
		}else{
			res.json({
				error:0,
				result:"success"
			})
		}
	});

});

router.post("/enable",function(req,res){
	var _id=req.body._id;
	if(!_id){
		res.json({
			error:1,
			result:"id 不存在！"
		})
		return;
	}
	User.updateStatus('enable',{_id:_id},function(err,data){
		if(err){
			res.json({
				error:1,
				result:"服务器出错！"
			})
		}else{
			res.json({
				error:0,
				result:"success"
			})
		}
	});
});
module.exports=router;
//角色管理
/*router.get("/add",function(req,res,next){
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
});*/
// ownerRoleUsers
//角色管理
/*router.get("/ownerRoleUsers",function(req,res,next){
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
*/
