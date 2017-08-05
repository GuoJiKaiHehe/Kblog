const mongoose = require("mongoose");
const PersonSchema = require(__dirname + "/../schema/index.js").PersonSchema;

const User = require("./user.js");
const lib = require(__dirname + "/../lib/index.js");


/*PersonSchema.statics.ownerRoleUsers=function(role_id,cb){
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
PersonSchema.statics.isRepeatNick = function(nick, cb) {

	this.model("Person").findOne({
		nick: nick
	}, function(err, data) {
		if (err) return cb(1, '服务器出错！');
		if (data) {
			cb(1, '昵称重复');
		} else {
			cb(0, null);
		}
	})
}
PersonSchema.statics.isRepeatAccount = function(account, cb) {
	// console.log(this)
	this.model("Person").findOne({
		account: account
	}, function(err, data) {
		if (err) return cb(1, '服务器出错！');
		if (data) {
			return cb(1, '用户名重复');
		} else {
			return cb(0, null);
		}
	})
}
PersonSchema.statics.login=function(){

};

PersonSchema.statics.disabled=function(id,cb){
	this.model("Person").update({_id:id},{$set:{isEnable:false}},function(err,data){
		if(err){
			return cb(1,err.message);
		}else{
			return cb(0,data);
		}
	})	
}
PersonSchema.statics.enabled=function(id,cb){
	this.model("Person").update({_id:id},{$set:{isEnable:true}},function(err,data){
		if(err){
			return cb(1,err.message);
		}else{
			return cb(0,data);
		}
	})		
}
PersonSchema.pre("save",function(next){
	this.updateAt=Date.now();
	next();
})

const Person = mongoose.model("Person", PersonSchema);
const Promise = require("bluebird");
Promise.promisifyAll(Person);
module.exports = Person;