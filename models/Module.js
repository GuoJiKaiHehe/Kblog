const mongoose=require("mongoose");
const ModuleSchema=require(__dirname+"/../schema/index.js").ModuleSchema;
const Promise=require("bluebird");
const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");






const Module=mongoose.model("Module",ModuleSchema);
Promise.promisifyAll(Module);
module.exports=Module;