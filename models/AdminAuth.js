const mongoose=require("mongoose");
const AdminAuthSchema=require(__dirname+"/../schema/index.js").AdminAuthSchema;

const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const validate=require(__dirname+"/../lib/validate.js");
const async=require("async");
/*var adminAuths=data.adminAuths;
		var model={};
		for(var i=0;i<adminAuths.length;i++){
			model[adminAuths[i].refmodel]=[];  
		}
		for(var i=0;i<adminAuths.length;i++){
		    
		     model[adminAuths[i].refmodel].push(adminAuths[i]);
		    
		}

		 console.log(model);

		res.end();*/
AdminAuthSchema.statics.getAuths=function(match,select,opts,cb){
	var _this=this;
	async.series({
		adminAuths:function(cb){
			_this.model("AdminAuth").find(match,select,opts).exec((err,data)=>{
				if(err){
					cb(err.message,err.message);
				}else{
					cb(null,data);
				}
			})
			/*_this.model("AdminAuth").aggregate([
					{$group:{_id:'$refmodel'}}
				],function(e,doc){
					cb(null,doc);
			})*/
		},
		total:function(cb){
			_this.model("AdminAuth").count(match,function(err,count){
				if(err){
					cb('获取数量失败！')
				}else{
					cb(null,count);
				}
			})
		}
	},function(err,result){
		if(err){
			cb(1,err)
		}else{
			cb(0,result);
		}
	});


}
AdminAuthSchema.statics.getAuthsByRoles=function(roles,cb){

}
AdminAuthSchema.statics.storeAuth=function(auth,cb){
	this.model("AdminAuth").create({
		authName:auth.authName,
		refmodel:auth.refmodel,
		action:auth.action,
		type:auth.type||'GET',
		desc:auth.desc||''
	},function(err,a){
		if(err){
			cb(1,err.message);
		}else{
			cb(0,a);
		}
	});
}


const Promise2=require("bluebird");
const AdminAuth=mongoose.model("AdminAuth",AdminAuthSchema);
Promise2.promisifyAll(AdminAuth);
module.exports=AdminAuth;