const mongoose=require("mongoose");
const UserRoleSchema=require(__dirname+"/../schema/index.js").UserRoleSchema;


const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");


/*RoleSchema.statics.ownerRoleUsers=function(role_id,cb){
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
const Promise=require("bluebird");
const UserRole=mongoose.model("UserRole",UserRoleSchema);
 Promise.promisifyAll(UserRole);
module.exports=UserRole;