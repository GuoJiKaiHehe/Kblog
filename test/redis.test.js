var session=require("express-session");
var RedisStore=require("connect-redis")(session);


app.use(session({
  secret:'guojikai',
  cookie:{maxAge:60*1000*22},
  resave:true,
  store:new RedisStore({  //redis 缓存；
    host:"103.76.85.214",
    port:"6379",
    pass:"guo978352",
    prefix:"blog:"
  })
}));