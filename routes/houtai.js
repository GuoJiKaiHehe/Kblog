var express = require('express');
var router = express.Router();
var routerIndex = express.Router();
const config=require(__dirname+"/../config/index.js");
const fs = require('fs')
const Admin=require(__dirname+"/../models/Admin.js");
const AdminRole=require(__dirname+'/../models/AdminRole.js');
const utility=require("utility");
const lib=require(__dirname+"/../lib/index.js");
const async=require("async");
const captcha=require("trek-captcha");

// const  Admin=require(__dirname+"/../models/admin.js");

module.exports = function(app){
	
	app.use('/houtai',router);
	app.use(function(req,res,next){
		if(req.session.adminId &&req.session.adminNick && req.session.adminAccount){
			
			next();
		}else{
			res.redirect("/houtai/login");
		}
	});

	app.use(function(req,res,next){
		// res.send(req.session.adminRoles);
		//判断权限；
		//console.log('bbb');
		// res.end("bbb");

		async.series({
			checkAuth:function(cb){
							   //发送过去一个数组；
				AdminRole.checkAuth(req.session.adminRoles,req,function(err,r){
					if(err){
					
						cb("not auth access")
					}else{
						cb(null,r); //返回角色列表；
					}
				});	
			}
		},function(err,result){
			if(err){
				res.send("not auth")
			}else{
				next();
				// res.send("welcome");
			}
		});
	});
	app.use(function(req,res,next){
		
		
		res.locals.adminRoles=req.session.adminRoles;
		res.locals.adminId=req.session.adminId;
		res.locals.adminNick=req.session.adminNick;
		res.locals.adminAccount=req.session.adminAccount;

		res.locals.staticPath=config.ADMIN_STATIC_PATH;
		res.locals.avatarPath=config.avatarPath;
		// console.log(config.ADMIN_STATIC_PATH);
		next();
	})

	app.use("/houtai/index",routerIndex);

	app.use("/houtai/index/adminrole",require('./AdminRole.js')); //guanliyuan角色管理；
	app.use("/houtai/index/adminauth",require('./AdminAuth.js')); //guanliyuan角色管理；
	app.use("/houtai/index/admin",require('./Admin.js')); //guanliyuan角色管理；
	app.use("/houtai/index/module",require('./Module.js')); //模块管理；
	app.use("/houtai/index/menu",require('./Menu.js')); //菜单管理；
	app.use("/houtai/index/api",require('./api.js')); //API管理；

	// app.use("/houtai/index/user",require('./user.js')); //用户管理；
	// app.use("/houtai/index/userRole",require('./userRole.js')); //用户角色管理；
	return router;
};
/* GET home page. */
routerIndex.get('/', function(req, res, next) {

 	// console.log(req.session);
  res.render('houtai/index', { title: '首页' });
});
/* GET home page. */
routerIndex.get('/welcome', function(req, res, next) {
  res.render('houtai/welcome', { title: 'welcome' });
});
// console.log(require("./bowen/index"));
//博文管理； 模块一；
routerIndex.get("/bowen",function(req,res){
	res.render("houtai/bowen/bowen-list");
});
routerIndex.post("/bowen/list",function(req,res){
	res.send(333);
});



router.post("/checklogin",function(req,res,next){


	async.series({
		checkCaptcha:function(cb){
			// console.log('checkCaptcha')
			if(lib.checkCaptcha(req)){
				cb(null,true);
			}else{
				cb('验证码错误','验证码错误');	
			}
		},
		checkAdmin:function(cb){

			Admin.findOne({
				account:req.body.account,
				pass:utility.sha1(req.body.pass)
			},{account:1,
				nick:1,
				_id:1,
				avatar:1,
				isEnable:1,
				roles:1}).populate({path:"roles",select:'_id roleName'})
						 .exec(function(err,data){
						if(err){
							cb('服务器出错！','服务器出错！')
						}else{
							if(data){
								cb(null,data);
							}else{
								cb('帐号或者密码错误，不存在！');
							}
						}
					})	
		}
	},function(err,result){
		if(err){
			res.json({
				error:1,
				result:err
			})
		}else{
			
			console.log(result);
			if(!result.checkAdmin.isEnable){
				res.json({
					error:1,
					result:"此管理员已经被禁用！"
				})
			}else{
				 req.session.adminId=result.checkAdmin._id;
				 req.session.adminAccount=result.checkAdmin.account;
				 req.session.adminNick=result.checkAdmin.nick;
				 req.session.adminAvatar=result.checkAdmin.avatar;
				 req.session.adminRoles=result.checkAdmin.roles;
				 res.json({
					error:0,
					result:"success",
					href:"/houtai/index"
				 })
			}
			
		}
	});

});

/* GET admin login. */
router.get('/login', function(req, res, next) {
 // req.session.name="guojikai";
  // res.cookie("name",'guojikai',{signed:true});
  console.log('login');
  //res.end("bbb");

  res.render('houtai/login', { 
  				title: '登录', 
  			});
});




//获取验证码；
router.get("/captcha",async function(req,res){
	const { token, buffer } = await captcha({size:4,style:2})
	// console.log(token);
	req.session.captchaToken=token;
	res.send(buffer);
	// fs.createWriteStream('a.gif').on('finish', () => console.log(token)).end(buffer)
})



//人员管理；
//会员
/*router.get("/index/user",function(req,res,next){
	res.render("houtai/user/user-list");
});
router.get("/index/user/add",function(req,res,next){
	res.render("houtai/user/user-add");
});

//管理员；
router.get("/index/admin",function(req,res,next){
	res.render("houtai/admin/admin-list");
});
*/
