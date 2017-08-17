const mongoose = require("mongoose");
const config = require("./index.js");

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
		db.close();
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
			db.open(config.DATABASE_IP, config.DATABASE_NAME, config.PORT,function(){  
				console.log('closed-opening');  
			});  
		    recon_flag =false;  
		    console.log('reConnect-***');  
		}
	}
}

exports.connect=connect;