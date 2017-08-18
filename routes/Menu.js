const express=require("express");
const router=express.Router();
const Menu=require(__dirname+"/../models/Menu.js");
//用于储存多模块名与其之间的关联；

const util=require("util");
const fs=require("fs");
const config=require(__dirname+"/../config/index.js");
const lib=require(__dirname+"/../lib/index.js");



router.get("/",function(req,res){
	Menu.getMenus({},function(err,data){
		if(err){
			res.send(data);
		}else{
			var fenleiTmp=[];

			var d=lib.fenlei(data);
			console.log(d);
			res.render("houtai/menu/menu-list",{
				title:"菜单列表",
				menus:d
			})
		}
	})
	
});
router.get("/add",function(req,res){

	res.render("houtai/menu/menu-add",{
		
	})	
	
		
});


router.post("/store",function(req,res){

	Menu.storeMenu(req.body,function(err,data){
		if(err){
			res.json({
				error:1,
				rsult:data
			})
		}else{
			res.json({
				error:0,
				rsult:data
			})
		}
	});
});

router.get("/edit",function(req,res){
	var _id=req.query.id;
	if(!_id){
		res.send("id不存在！");
	}
	Menu.findOne({_id:_id},{},function(err,data){
		if(err){
			res.send("出错了please try agan");
		}else{
			if(data){
				res.render("houtai/menu/menu-edit",{
					menu:data
				})
			}else{
				res.send("不存在这数据！");
			}
		}
	});
});

router.post("/save",function(req,res){
	var _id=req.body.id;
	if(!_id){
		res.json({
				error:1,
				result:"id不存在！"
			})
		
	}
	Menu.findOneAndUpdate({_id:_id},{$set:{
		name:req.body.name,
		pid:req.body.pid,
		href:req.body.href,
		icon:req.body.icon
	}},function(err,menu){
		if(err){
			res.json({
				error:1,
				result:err.message
			})
		}else{
			res.json({
				error:0,
				result:menu
			})
		}
	});
});

router.post("/del",function(req,res){
	var _id=req.body.id;
	if(!_id){
		res.json({
			error:1,
			result:"id不存在！"
		})
	}
	Menu.findOneAndRemove({_id:_id},function(err,data){
		if(err){
			res.json({
				error:1,
				result:err.message
			})
		}else{
			if(data){
				res.json({
					error:0,
					result:data
				})
			}else{
				res.json({
					error:1,
					result:'没有此数据！'
				})
			}
			
		}
	})
});


module.exports=router;