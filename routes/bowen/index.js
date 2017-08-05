var express = require('express');
var router = express.Router();


router.get("/",function(req,res,next){
	res.send("3333");
});

module.exports=router;