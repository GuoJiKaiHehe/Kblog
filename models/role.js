const mongoose=require("mongoose");
const RoleSchema=require(__dirname+"/../schema/index.js").RoleSchema;
const Promise=require("bluebird");
const Role=mongoose.model("Role",RoleSchema);
const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
Promise.promisifyAll(Role);

RoleSchema.statics.ownerRoleUsers=function(role_id,cb){
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
};
 
module.exports=Role;