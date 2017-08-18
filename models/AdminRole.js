const mongoose=require("mongoose");
const AdminRoleSchema=require(__dirname+"/../schema/index.js").AdminRoleSchema;
const Promise=require("bluebird");
const util=require("util");
const url=require("url");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const AdminAuth=require(__dirname+"/../models/AdminAuth.js");

const async=require("async");
AdminRoleSchema.statics.storeAdminRole=function(req,cb){
	this.model("AdminRole").findOne({roleName:req.body.roleName},(err1,data1)=>{
			if(err1){
				cb(1,err1.message);
			}else if(data1){
				cb(1,'角色已经存在！');	
			}else{
				this.model("AdminRole").create({
						roleName:req.body.roleName,
						desc:req.body.desc||'',
						auths:req.body.auths||[]
				},function(err,data){
					if(err){
						cb(1,err.message);
					}else{
						cb(0,'成功添加！');
					}
				});
			}
	})
	
}
AdminRoleSchema.statics.getAdminRoles=function(opts,cb){
/*	if(util.isFunction(opts)){
			this.model("AdminRole").findAsync().then((data)=>{

			opts(0,data);
			});
	}else{
		this.model("AdminRole").findAsync({}).then((data)=>{

			cb(0,data);
		});
	}*/
	var _this=this;

	async.series({
		getAdminRoles:function(cb){
			_this.model("AdminRole").find({},function(err,data){
					if(err){
						cb(err.message);
					}else{
						cb(null,data);
					}
			});
		},
		getCount:function(cb){
			_this.model("AdminRole").count((err,count)=>{
				if(err){
					cb(err.message);
				}else{
					cb(null,count);
				}
			})
		}
	},function(err,result){
		if(err){
			util.isFunction(opts) ?opts(1,err):cb(1,err);
		}else{
		
			util.isFunction(opts) ? opts(0,{adminroles:result.getAdminRoles,total:result.getCount}):cb(0,{adminroles:result.getAdminRoles,total:result.getCount})
		}
	})
	// this.model("AdminRole").

}

AdminRoleSchema.statics.toUpdate=function(match,set,cb){
		// data 是一个角色 document;
		this.model("AdminRole").findByIdAndUpdate(match._id,{$set:set},function(err,data){
			if(err){
				cb(1,err.message);
			}else{
				if(data){
					cb(0,data);
				}else{
					cb(1,'不存在数据！');	
				}
				
			}
		});

}
AdminRoleSchema.statics.del=function(match,cb){
	this.model("AdminRole").findOneAndRemove(match,function(err,data){
				if(err){
					cb(1,err.message);
				}else{
					if(data){
						cb(0,data);
					}else{
						cb(1,'没有此数据！');
					}
					
				}
	});

}
/*AdminRoleSchema.statics.ownerRoleUsers=function(role_id,cb){
	User.find({}).exec(function(err,data){
		var result=[];
		if(data){
			data.forEach(function(item,index){
			item.roles.forEach((item2,index2)=>{
				if(item2._id==role_id){
					result.push(item2);
					}
				})
			})
		}
		
		cb(result);
	})
};*/
AdminRoleSchema.statics.checkAuth=function(roles,req,cb){
	//AdminAuth
	var _this=this;
	var ids=[];
	for(var i=0;i<roles.length;i++){
		ids.push(roles[i]._id);
	}
	this.model("AdminRole").find({_id:{$in:ids} },{auths:1},function(err,data){
			//获取 权限；
			if(err){
				cb(0,err.message);
			}else{
				if(!data){
					cb(1,'不存在数据！');
					return;
				}
				var authsArr=[];
				for(var i=0;i<data.length;i++){
					
				  authsArr=authsArr.concat(data[i].auths);
				  
				}
				AdminAuth.find({_id:{$in:authsArr}},function(err,data1){
						if(err){
							cb(1,err.message);
						}else{
							if(!data1){
								cb(1,'不存在数据！');
								return;
							}else{
								// console.log(data1);
								var path=url.parse(req.url).pathname;

								var type=req.method;
								console.log(path,type)
								var flag=false;
								for(var i=0;i<data1.length;i++){
									if(data1[i].action==path && data1[i].type==type){
									
										flag=true;
										break;
										
									}
								}
								if(flag){
									cb(0,'success')
								}else{
									cb(1,'没有权限')
								}
								
								
							}

							
						}
				})
			}
	})


/*	this.model("AdminRole").find({},{})
						   .populate({
						   		path:'auths',
						   		select:'type action'
							})
						   .exec(()=>{

						   })*/
}
const AdminRole=mongoose.model("AdminRole",AdminRoleSchema);
Promise.promisifyAll(AdminRole);
module.exports=AdminRole;