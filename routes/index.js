var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front/login', { title: '登录' });
});

router.get('/home', function(req, res, next) {
  res.render('front/index', { title: '首页' });
});

router.get('/write', function(req, res, next) {
  res.render('front/write', { title: '写博文' });
});

module.exports = router;
