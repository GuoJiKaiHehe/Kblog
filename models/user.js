const mongoose=require("mongoose");
const UserSchema=require("../schema/index").UserSchema;
const lib=require(__dirname+'/../lib/index.js');
const util=require("util");
const Person=require("./person.js");
const validate=require(__dirname+"/../lib/validate.js");


UserSchema.statics.register=function(obj,cb){
   validate.equal(obj.password,obj.password2) ? null : cb(1,'密码不相等');

    var p1={
        account:obj.account,
        pass:lib.sha1(obj.password),
        nick:obj.nick,
        sex:obj.sex,
        intro:obj.intro
    };
    
    var pEntity=new Person(p1);
    
    // if(pEntity)
    // console.log(Person.isRepeatAccount);
   Person.isRepeatAccount(obj.account,function(err,data){

        if(err){
            //如果错误存在； 错名有；
            return  cb(err,'用户名重复');
        }else{
            Person.isRepeatNick(obj.nick,function(err,data){
                if(err){
                    //如果错误存在； 错名有；
                    return  cb(1,'昵称重复');
                }else{
                     pEntity.save((err,data)=>{
                         // console.log(pEntity);
                        if(err){
                           return   cb(1,err)

                        }else{

                            var uEntity=new  User({
                                pid:data._id,
                                roles: util.isArray(obj.roles) ?obj.roles :[obj.roles]
                            });
                            uEntity.save((err,u)=>{
                                if(err){
                                    return cb(1,err);
                                }
                                return   cb(0,u);
                            })
                           
                        }
                    }) 
                }
                
            });
        }
        // return  cb(err,null);
    });
};

const Promise=require("bluebird");
const User=mongoose.model("User",UserSchema);
Promise.promisifyAll(User);

module.exports=User;


// console.log(UserSchema.statics.register)

