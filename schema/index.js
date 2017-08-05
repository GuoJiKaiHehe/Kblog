const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;
const tArray = Schema.Types.Array;

// 权限行为；
exports.ActionSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: true
    } //行为管理；规定权限；
});

// animalSchema.index({ name: 1, type: -1 });
//权限管理；本站权限：分为：超级管理员，管理员，用户；
//超级管理员权限为3； 管理员权限为2；用户权限为1；
//超级管理员可以管理：管理员、用户；
//管理员可以管理：用户；
//自定义角色，然后再分配权限；使其拥有不同的管理能力；这是超级管理员具备的能力；

exports.AuthAdminSchema = new Schema({
    authName: {
        type: String,
        required: true,
        index: true
    },
    Actions:{
        todo:String
    }, //多个行为； 一个权限有多个行为；
    
});

exports.AuthUserSchema = new Schema({
    authName: {
        type: String,
        required: true,
        index: true
    },
    Actions:{
        todo:String
    }, //多个行为； 一个权限有多个行为；
    
});

//角色管理:超级管理员，管理员，用户；
exports.RoleSchema = new Schema({
    roleName: {
        type: String,
        required: true,
        index: true
    },
    desc:{
        type:String,
        default:"是一个人"
    },
    Auths: [{
        type:ObjectId,
        ref:"Auth"
    }]  //一个角色可以有多种权限；
});


//角色管理:用户角色
exports.UserRoleSchema = new Schema({
    roleName: {
        type: String,
        required: true,
        index: true
    },
    desc:{
        type:String,
        default:"是一个人"
    },
    Auths: [{
        type:ObjectId,
        ref:"Auth"
    }]  //一个角色可以有多种权限；
});



// 管理员；
/*exports.AdminSchema = new Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
});*/

exports.PersonSchema=new Schema({
    account: {
        type: String,
        index: true,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    nick:{
        type:String,
        index:true,
        required:true
    },
    avatar:{
        type:String,
        default:"default.jpg"
    },
    sex:{
        type:Number,
        default:1  //默认1 是男  0是女；
    },
    intro:{
        type:String,
        default:''
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    isEnable:{
        type:Boolean,  //是否启用
        default:true
    },
    updateAt:{
        type:Date,
        default:Date.now()
    },
})

//先有用户=> 普通用户的分数永远是1；分数大于等于2 则为管理员；
//联想到，登录，注册， （多用户还是单用户）
exports.UserSchema = new Schema({
    pid:{  //指向person
        type:ObjectId,
        ref:"Person"
    },
    
    roles:[{
        type:ObjectId,
        ref:"UserRole"
    }]  //用户可以有多中角色；
});

exports.AdminSchema = new Schema({
    pid:{  //指向person
        type:ObjectId,
        ref:"Person"
    },
    roles:[{
        type:ObjectId,
        ref:"Role"
    }]  //用户可以有多中角色；
});


exports.TagCategorySchema=new Schema({
    name:String
});
// tag 标签表；
exports.TagSchema = new Schema({
    tagName: {
        type: String,
        required: true,
        index: true
    },
    cid:{
        type:ObjectId,
        ref:'TagCategory'
    },
    isShow: {
        type:Boolean,
        default:false
    },
    sort:{
        type:Number,
        default:1
    }
});
//user 和 admin 的基schema；

//再有博文；
exports.BowenSchema = new Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    cid: {
        type: ObjectId,
        ref : "Category"
    },
    uid: {
        type: ObjectId,
        ref : "User"
    },
    tid: [{
        type:ObjectId,
        ref : "Tag"
    }],
    isPublish: {
        type: Boolean,
        default: true
    },
    isDraft:{  //是否是草稿；
        type:Boolean,
        default:false
    },
    praise: {
        type: Number,
        index: true,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

// 文章schema
exports.ArticleSchema = new Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    cid: {
        type: ObjectId,
        ref : "Category"
    },
    uid: {
        type: ObjectId,
        ref : "User"
    },
    tid: [{
        type:ObjectId,
        ref : "Tag"
    }],
    isPublish: {
        type: Boolean,
        default: true
    },
    isDraft:{  //是否是草稿；
        type:Boolean,
        default:false
    },
    praise: {
        type: Number,
        index: true,
        default: 0
    },
    view: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});


//评论
exports.CommentShema = new Schema({
    uid: {
        type: ObjectId,
        ref : "User"
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    bid: {
        type: ObjectId,
        ref : "Bowen"
    },
    createAt: {
        type: Date,
        default: Date.now()

    }
})

// 分类
exports.CategoryShema = new Schema({
    name: {
        type: String,
        default: Date.now(),
        required: true
    },
    pid:{
        type:Number, //默认是顶级分类；
        default:0
    }, 
    desc:{
        type:String,
        default:''
    }
});
/*
mongoose.model("Role", RoleSchema);

mongoose.model("Auth", AuthSchema);



mongoose.model("User", UserSchema);
mongoose.model("Bowen", BowenSchema);
mongoose.model("Comment", CommentShema);
mongoose.model("Category", CategoryShema);
mongoose.model("Tag", TagSchema);*/

// mongoose.model("Admin", AdminSchema);

//杂项；
exports.MessageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    uid: {
        type: ObjectId,
        ref : "User"
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});
// mongoose.model("Message", MessageSchema);