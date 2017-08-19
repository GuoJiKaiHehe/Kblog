const mongoose=require("mongoose");
const BowenSchema=require(__dirname+"/../schema/index.js").BowenSchema;

const util=require("util");
// const User=require("./user.js");
const lib=require(__dirname+"/../lib/index.js");
const validate=require(__dirname+"/../lib/validate.js");
const async=require("async");





const Promise2=require("bluebird");
const Bowen=mongoose.model("Bowen",BowenSchema);
Promise2.promisifyAll(Bowen);
module.exports=Bowen;