const mongoose = require("mongoose");
const config = require("../config/index.js");

// console.log(config);

let recon_flag = true;

function connect() {
	mongoose.connect(config.DATABASE_URL);
	var db = mongoose.connection;
	db.on("error", function(err) {
		console.log("connection error" + err);
		db.close();
	});

	db.on("disconnected", function() {
		console.log('disconnected');
		dbcon.close();
	});

	db.on("open", function() {
		console.log('connection successfull');
		recon_flag=true; //连接成功；
	});


	db.on("close", function() {
		console.log("closed");
	});

	function  reConnect(){
		console.log('reConnect'); 
		if(recon_flag){
			console.log('reConnect-**');  
			dbcon.open(config.DATABASE_IP, config.DATABASE_NAME, config.PORT,function(){  
				console.log('closed-opening');  
			});  
		    recon =false;  
		    console.log('reConnect-***');  
		}
	}
}
connect();
const Role=require(__dirname+"/../models/role.js");
Role.create({
	roleName:"普通会员",
	desc:"putong"
},function(err,data){
	console.log(err,data);
})
exports.connect=connect;