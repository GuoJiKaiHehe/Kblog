//存放工具；
const crypto = require("crypto");
const uuid = require("uuid");
const markdown = require("markdown");
const moment = require("moment");
const util=require("util");
const formidable=require("formidable");
const gm=require("gm").subClass({imageMagick: true});
const qs=require("querystring");
exports.sha1 = function(str) {
	return crypto.createHash("sha1")
		.update(str)
		.digest("hex");
}
exports.md5 = function(str) {
		return crypto.createHash("md5")
			.update(str)
			.digest("hex");
	}
	//生成唯一字符串；
exports.unique = function() {
		return uuid.v4().replace(/\-/g,'');
	}
	// markdown 文本
exports.markdown = function(str) {
	return markdown.toHTML(str)
}
//时间格式化；
exports.format_time=function(str){
	return moment().format(str);
}
exports.trims=function(obj){
	var resultArr=[];
	// var resultObj={};
	if(util.isArray(obj)){
		for(var i=0;i<obj.length;i++){
			if(util.isString(obj[i])){
				obj[i]=obj[i].tirm();
			}
			resultArr.push(obj[i]);
		}
		return resultArr;
	}else if(util.isObject(obj)){
		for(var k in obj){
			if( util.isString(obj[k])){
				obj[k]=obj[k].trim();
			}
		}
		return obj;
	}else if(util.isString(obj)){
		return obj.trim();
	}
};
exports.getPages=function(curPage,limit,total,query){

	var html='<ul class="pagination">';
	// query.page   //当前页；
	delete query.page;
	var search=qs.stringify(query);
	console.log(Object.keys(query) );
	if(Object.keys(query).length>0){
		console.log("aaaa")
		search='&'+search;
	}
	curPage=parseInt(curPage);
	if(curPage>1 ){
		html+='<li><a href="?page='+(curPage-1)+search+'">«</a></li>';
	}else{
		html+='<li class="disabled"><a href="javascript:;">«</a></li>';
	}

	var totalPage=Math.ceil(total/limit);

	for(var i=1;i<=totalPage;i++){
		if(i==curPage){
			html+='<li class="active" ><a href="javascript:;">'+i+'</a></li>';
		}else{
			html+='<li><a href="?page='+i+search+'">'+i+'</a></li>';
		}
		
	}
	if( curPage<totalPage ){
		html+='<li><a href="?page='+(parseInt(curPage)+1)+search+'">»</a></li>';
	}else{
		html+='<li class="disabled"><a href="javascript:;">»</a></li>';
	}
	
	html+=`</ul>`;
	/*`
	<ul class="pagination"><li><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">»</a></li></ul>*/
	
	return html;
}

exports.upload=function(req){

}
exports.resize=function(imgPath,width,height,destPath,cb){
	console.log(imgPath);
	gm(imgPath).resize(width,height,"!")
			   .write(destPath,function(err){
			   		if(err){
			   			cb(1,err.message);
			   		}else{
			   			cb(0,null);
			   		}
			   });
}

exports.checkCaptcha=function(req){

	if(req.session.captchaToken==req.body.code){
		return true;
	}else{
		return false;
	}
}
/*gm('./11.jpg').crop(200,300,0,0)
.write('./22.jpg',(err)=>{ 
	if(err)
	 console.log(err) 
	 else 
	 console.log('done') }) width 200,height:300,x:0,y:0

*/

/*exports.groupBy=function(data,groupKey){
	var result={};
	for(var i=0;i<data.length;i++){
		if(result[])
	}
}*/