const mongoose=require("mongoose");
const AdminRoleSchema=require(__dirname+"/../schema/index.js").AdminRoleSchema;
const Promise=require("bluebird");
const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");

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
	if(util.isFunction(opts)){
			this.model("AdminRole").findAsync().then((data)=>{

			opts(0,data);
			});
	}else{
		this.model("AdminRole").findAsync({}).then((data)=>{

			cb(0,data);
		});
	}

}

AdminRoleSchema.statics.toUpdate=function(match,set,cb){
		// data 是一个角色 document;
		this.model("AdminRole").findByIdAndUpdate(match._id,{$set:set},function(err,data){
			if(err){
				cb(1,err.message);
			}else{
				cb(0,data);
			}
		});

}
AdminRoleSchema.statics.del=function(match,cb){
	this.model("AdminRole").remove(match,(err,data)=>{
		if(err){
			cb(1,err.message);
		}else{
			cb(0,data);
		}
	})
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

const AdminRole=mongoose.model("AdminRole",AdminRoleSchema);
Promise.promisifyAll(AdminRole);
module.exports=AdminRole;