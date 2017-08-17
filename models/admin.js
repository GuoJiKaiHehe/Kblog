const mongoose=require("mongoose");
const AdminSchema=require(__dirname+"/../schema/index.js").AdminSchema;

const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const validate=require(__dirname+"/../lib/validate.js");
const async=require("async");
AdminSchema.statics.addAdmin=function(obj,cb){
	
	//验证；
	obj=lib.trims(obj);

	if(!validate.rangeLen(obj.pass,6,20)){
		cb(1,"密码格式不正确")
	}
	if(obj.pass!=obj.password2){
		cb(2,'密码与确认密码不相等！');
	}
	if(!validate.rangeLen(obj.account,3,20)){
		cb(3,'帐号格式不相等');
	}
	// console.log(obj);
	try{


	this.model("Admin").isExistField({account:obj.account}).then((data)=>{
		if(data){
			// console.log(data);
			cb(4,'帐号已经存在！');
			return;
		}else{
			//
			this.model("Admin").isExistField({nick:obj.nick}).then((nick)=>{
				if(nick){
					cb(5,'昵称已经存在！');
				}else{
					 this.model("Admin").isExistField({email:obj.email}).then((email)=>{
					 	if(email){
					 		cb(6,'邮箱已存在！');
					 	}else{
					 		obj.pass=lib.sha1(obj.pass);
							this.model("Admin").create({
								account:obj.account,
								pass:obj.pass,
								nick:obj.nick,
								phone:obj.phone||'',
								sex:obj.sex,
								roles:obj.roles.split("|"),
								intro:obj.intro,
								email:obj.email,
								avatar:obj.avatar
							},function(err,data){
								if(err){
									cb(1,err.message);
								}else{
									cb(0,data);
								}
							});	

					 	}
					 })
					

				}
			})
			
		}
	});

	}catch(e){
		cb(1,e.message);
	}
	// if(rangeLen)
	// this.model("Admin").find({account:})
	
}
AdminSchema.statics.getAdmins=function(match,select,opts,cb){
	// console.log(opts);
	var _this=this;
	async.parallel({
		admins:function(cb1){
			_this.model("Admin").find(match,select,opts)
						 .populate({path:"roles",select:''})
						 .exec((err,data)=>{
						 	if(err){
						 		cb1(1,err.message);
						 	}else{
						 		cb1(null,data);
						 	}
						  })
		},
		total:function(cb2){
			_this.model("Admin").count(match,function(err,count){
					   				if(err){
					   					cb2(1,err.message);
					   				}else{
					   					cb2(null,count);
					   				}
					   			});
		}
	},function(err,result){
		if(err){
			cb(1,err);
		}else{
			cb(0,result)
		}
	})
/*	this.model("Admin").find(match,select,opts)
					   .populate({path:"roles",select:''})
					   .exec((err,data)=>{
					   		if(err){
					   			cb(1,err.message);
					   		}else{
					   			this.model("Admin").count(match,function(err,count){
					   				cb(0,{
						   				admins:data,
						   				a:count
						   			});
					   			});
					   			
					   		}
					   })*/
}
AdminSchema.statics.isExistField=function(fieldObj){
 return new Promise((resolve,reject)=>{
		this.model("Admin").findOne(fieldObj,function(err,data){
			if(err){
					// reject(1,err.message);
					throw err;
			}else{
				if(data){
					resolve(data);
				}else{
					resolve(null);
				}
				
			}
		})
	})	
}

AdminSchema.statics.modifyPass=function(match,oldpass,newpass,cb){
	this.model("Admin").findOne(match,(err,ad)=>{
		if(err){
			cb(1,err.message);
		}else{
			if(data){
				if(oldpass!=ad.pass){
					cb(1,"久密码不相等！请选择其他方式修改！");
				}else{
					this.model("Admin").update({_id:ad._id},{$set:{pass:newpass}},function(err,updata){
							if(err){
								cb(1,"修改出错！");
							}else{
								cb(0,'修改成功！');
							}
					});
				}	
			}
			
		}
	})
}

AdminSchema.methods.saveAdmin=function(){
	
};
AdminSchema.statics.updateStatus=function(status,match,cb){
	
	if(status=='enable'){
		this.model("Admin").findOneAndUpdate(match,{$set:{isEnable:true}},function(err,data){
			if(err){
				cb(1,err.message);
			}else{
				cb(0,data);
			}
		})
	}else if(status=='disable'){
		console.log(match);
		this.model("Admin").findOneAndUpdate(match,{$set:{isEnable:false}},function(err,data){
			if(err){
				cb(1,err.message);
			}else{
				cb(0,data)
			}
		})
	}
}
const Promise2=require("bluebird");
const Admin=mongoose.model("Admin",AdminSchema);
Promise2.promisifyAll(Admin);
module.exports=Admin;