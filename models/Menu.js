const mongoose=require("mongoose");
const MenuSchema=require(__dirname+"/../schema/index.js").MenuSchema;
const Promise=require("bluebird");
const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");






const Menu=mongoose.model("Menu",MenuSchema);
Promise.promisifyAll(Menu);
module.exports=Menu;