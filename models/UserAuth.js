const mongoose=require("mongoose");
const UserAuthSchema=require(__dirname+"/../schema/index.js").UserAuthSchema;

const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const validate=require(__dirname+"/../lib/validate.js");
const async=require("async");

UserAuthSchema.statics.getAuths=function(match,select,opts,cb){
	var _this=this;
	async.series({
		userAuths:function(cb){
			_this.model("UserAuth").find(match,select,opts).exec((err,data)=>{
				if(err){
					cb(err.message,err.message);
				}else{
					cb(null,data);
				}
			})
			/*_this.model("UserAuth").aggregate([
					{$group:{_id:'$refmodel'}}
				],function(e,doc){
					cb(null,doc);
			})*/
		},
		total:function(cb){
			_this.model("UserAuth").count(match,function(err,count){
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
UserAuthSchema.statics.getAuthsByRoles=function(roles,cb){

}
UserAuthSchema.statics.storeAuth=function(auth,cb){
	var _this=this;
	async.series({
		findAuth:function(cb){
			_this.model("UserAuth").findOne({
				$or:[{authName:auth.authName},
					{action:auth.action}
				]
			},function(err,data){
				if(err){
					cb(err.message);
				}else{
					// console.log(data);
					if(data){
						cb('名称或者行为存出现重复；')
					}else{
						cb(null,data);
					}
				}
			});
		},	
		addAuth:function(cb){
				_this.model("UserAuth").create({
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
	},function(err,data){
		if(err){
			cb(1,err);
		}else{
			cb(0,data.addAuth);
		}
	});

}
UserAuthSchema.statics.getAuthsAndGroupByModel=function(match,select,opts,cb){
		var _this=this;
	async.series({
		userAuths:function(cb){
			_this.model("UserAuth").find(match,select,opts).exec((err,data)=>{
				if(err){
					cb(err.message,err.message);
				}else{
					cb(null,data);
				}
			})
		}
	},function(err,result){
		if(err){
			cb(1,err)
		}else{
			var modelAuth={};
			for(var i=0;i<result.userAuths.length;i++){
					modelAuth[result.userAuths[i].refmodel]=[];
			}
			for(var i=0;i<result.userAuths.length;i++){
				modelAuth[result.userAuths[i].refmodel].push(result.userAuths[i])
			}

			cb(0,modelAuth);
		}
	});
}

const Promise2=require("bluebird");
const UserAuth=mongoose.model("UserAuth",UserAuthSchema);
Promise2.promisifyAll(UserAuth);
module.exports=UserAuth;