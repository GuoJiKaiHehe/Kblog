const mongoose=require("mongoose");
const MenuSchema=require(__dirname+"/../schema/index.js").MenuSchema;
const Promise=require("bluebird");
const util=require("util");
// const User=require("./user.js");
const async=require("async");
const lib=require(__dirname+"/../lib/index.js");


MenuSchema.statics.storeMenu=function(menu,cb){
	var _this=this;
	async.series({
		findMenu:function(cb){
			_this.model("Menu").findOne({
				name:menu.name
			},{_id:1},function(err,data){
				if(err){
					cb(err.message);
				}else{
					cb(null,data);
				}
			})
		},
		addMenu:function(cb){
			_this.model("Menu").create({
				name:menu.name,
				pid:menu.pid,
				icon:menu.icon||'',
				href:menu.href||''
			},function(err,data){
				if(err){
					cb(err.message);
				}else{
					cb(null,data);
				}
			})
		}
	},function(err,result){
		if(err){
			cb(1,err);
		}else{
			cb(0,result);
		}
	})
}
MenuSchema.statics.getMenus=function(match,cb){
	this.model("Menu").find(match,function(err,data){
		if(err){
			cb(1,err.message);
		}else{
			cb(0,data);
		}
	});
}


const Menu=mongoose.model("Menu",MenuSchema);
Promise.promisifyAll(Menu);
module.exports=Menu;