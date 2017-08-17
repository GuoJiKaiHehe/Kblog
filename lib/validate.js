exports.equal=function (str1,str2){
	if(str1==str2){
		return true;
	}else{
		return false;
	}
}


exports.rangeLen=function(value,min,max){
	var rxp=new RegExp("^[\\S]{"+min+","+max+"}$");

	if(rxp.test(value)){
		return true;
	}else{
		return false;
	}
}