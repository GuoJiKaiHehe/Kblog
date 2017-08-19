const mongoose=require("mongoose");
const UserRoleSchema=require(__dirname+"/../schema/index.js").UserRoleSchema;


const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const async=require('async');
const util=require("util");
UserRoleSchema.statics.getUserRoles=function(match,select,opts,cb){
	var _this=this;
	async.series({
		getUserRoles:function(cb){
			_this.model("UserRole").find(match,select,opts).exec((err,data)=>{
				if(err){
					cb(err.message,err.message);
				}else{
					cb(null,data);
				}
			})
		},
		total:function(cb){
			_this.model("UserRole").count(function(err,data){
				if(err){
					cb(err.message);
				}else{
					cb(null,data)
				}
			})
		}
	},function(err,result){
		if(err){
			util.isFunction(opts) ?opts(1,err):cb(1,err);
		}else{
		
			util.isFunction(opts) ? opts(0,{userroles:result.getUserRoles,total:result.total}):cb(0,{userroles:result.getUserRoles,total:result.total})
		}
	})

	
}

const Promise=require("bluebird");
const UserRole=mongoose.model("UserRole",UserRoleSchema);
 Promise.promisifyAll(UserRole);
module.exports=UserRole;