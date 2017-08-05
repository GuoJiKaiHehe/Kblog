var express = require('express');
var router = express.Router();
const config=require(__dirname+"/../config/index.js");


module.exports = function(app){
	app.use('/houtai',router);
	app.use("/houtai/index/role",require('./role.js')); //角色管理；
	app.use("/houtai/index/user",require('./user.js')); //用户管理；
	app.use("/houtai/index/userRole",require('./userRole.js')); //用户角色管理；
	return router;
};

router.use(function(req,res,next){
	res.locals.staticPath=config.ADMIN_STATIC_PATH;
	res.locals.avatarPath=config.avatarPath;
	// console.log(config.ADMIN_STATIC_PATH);
	next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('houtai/login', { title: '登录' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('houtai/index', { title: '首页' });
});
/* GET home page. */
router.get('/index/welcome', function(req, res, next) {
  res.render('houtai/welcome', { title: 'welcome' });
});
// console.log(require("./bowen/index"));
//博文管理； 模块一；
router.get("/index/bowen",function(req,res){
	res.render("houtai/bowen/bowen-list");
});
router.post("/index/bowen/list",function(req,res){
	res.send(333);
});


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
