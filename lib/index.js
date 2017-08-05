//存放工具；
const crypto = require("crypto");
const uuid = require("uuid");
const markdown = require("markdown");
const moment = require("moment");
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
		return uuid.uuid.v4();
	}
	// markdown 文本
exports.markdown = function(str) {
	return markdown.toHTML(str)
}
//时间格式化；
exports.format_time=function(str){
	return moment().format(str);
}

