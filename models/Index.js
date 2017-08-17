const mongoose=require("mongoose");
const IndexSchema=require(__dirname+"/../schema/index.js").IndexSchema;

const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const validate=require(__dirname+"/../lib/validate.js");
const async=require("async");

IndexSchema.statics.getMenus=function(){
	
}


const Index=mongoose.model("Index",IndexSchema);

module.exports=Index;