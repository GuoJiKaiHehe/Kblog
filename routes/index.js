var express = require('express');
var router = express.Router();
// var User = require(__dirname + "/../models/user.js");
// var Person = require(__dirname + "/../models/person.js");
/* GET home page. */
router.use(function(req,res,next){
	
	if(req.session.uid &&req.session.nick && req.session.account ){
		res.locals.uid=req.session.uid;
		res.locals.nick=req.session.nick;
		res.locals.account=req.session.account;
	}
	next();
});
router.get('/klogin', function(req, res, next) {
	res.render('front/login', {
		title: '登录'
	});
});
router.post('/klogin', function(req, res, next) {
	//登录；
	var account = req.body.account;
	var pass = req.body.pass;
	if (!/\w{3,20}/g.test(account.trim())) {
		res.json({
			error: 1,
			result: "帐号格式不争取"
		})
	}
	if (!/\w{6,20}/g.test(pass.trim())) {
		res.json({
			error: 1,
			result: "密码格式不正确"
		})
	}

	/*Person.findOne({
		account: account,
		pass: pass
	}, function(err, data) {
		if (err) {
			res.json({
				error: 1,
				result: "服务器出错"
			})
		} else if (!data) {
			res.json({
				error: 1,
				result: "帐号或密码错误"
			})
		} else {
			req.session.uid = data._id;
			req.session.nick = data.nick;
			req.session.account = data.account;
			res.json({
				error: 0,
				result: "success"
			});
		}
	});*/
	// res.send("login");
});


router.post("/gitHubLogin", function(req,res,next) {
	//githublogin

	res.send("githublogin");
});
router.post("/qqLogin", function(req,res,next) {
	//githublogin

	res.send("qqLogin");
});

router.get('/', function(req, res, next) {
	res.render('front/index', {
		title: '首页',

	});
});

router.get('/write', function(req, res, next) {
	res.render('front/write', {
		title: '写博文'
	});
});

router.get('/personal', function(req, res, next) {
	res.render('front/personal', {
		title: '个人首页'
	});
});

router.get('/details', function(req, res, next) {
	res.render('front/details', {
		title: '博文详情'
	});
});
router.get('/chat', function(req, res, next) {
	res.render('front/chat', {
		title: '博文详情'
	});
});
// 用户个人中心；
router.get('/user',function(req,res,next){
	if(req.query.to=='setting'){
		//设置；
		
	}else{

	}
})
module.exports = router;