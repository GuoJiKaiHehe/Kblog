

module.exports=function(server){
	console.log('socketio running');
	// console.log(socketIo.)
	var io = require('socket.io')(server);
	io.on("connection",function(socket){
		console.log("socket connection");
		socket.on("push_bowen",function(){
			
		});
		socket.on("add_comment",function(){

		});
		//发布博文监听和派发时间；
		

		
		
		socket.on("disconnect",function(){
			//当离开的时候；
		})



});


	

}