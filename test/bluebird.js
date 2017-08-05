var Promise=require("bluebird");

function first(){
	console.log('111')
}
function second(){
	console.log('222')
}
function third(){
	setTimeout(function(){
		console.log("333")
	},1000)
	
}

// Promise.resolve().then(thrid).then(first).then(second);
var thirdSync=Promise.promisify(third);
var secondSync=Promise.promisify(second);
var firstSync=Promise.promisify(first);

/*thirdSync()
.then(secondSync)
.then(firstSync)
.catch((err)=>{
	console.log(err);
})
*/
var fs=require("fs");
var User={
	read:function(url){
		/*fs.readFile(url,function(err,data){
			// console.log(err+'111');

			return data;
			console.log(data);
		});*/
		setTimeout(function(){
			console.log(111)
		},1000);
	},
	write:function(){
		/*fs.writeFile("./tt.txt",function(err){
			console.log(err);
			console.log('write')
		})*/
		setTimeout(function(){
			console.log(2222)
		},1100);
	}

}
// Promise.promisifyAll(User);
// Promise.promisifyAll(User.prototype);
Promise.promisifyAll(User);
// User.createAsync
/*User.readAsync(__dirname+"/index.js").then((data)=>{
	console.log(data);
})*/
/*Promise.promisifyAll(fs);
fs.readFileAsync(__dirname+'/index.js').then(function(data){
	console.log(data)
});*/
/*User.writeAsync();
User.readAsync();*/

// 变成异步后；
//使用；
/*
	Comment.createAsync({
	   //传参数；
	}).then((result)=>{
		得到结果；
	})
	Comment.createAsync({
		aid:aid,
		content:content,
		user_id:userId
	}).then(function (result) {
	Blog.findByIdAndUpdateAsync(aid,{$inc:{comment_count:1}});
	omment.findByIdAndUpdateAsync(cid,{"$push":{"replys":reply}},{new:true}).then(function (result) {

	// path select model, match options	
*/