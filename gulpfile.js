const gulp=require("gulp");
// const browserSync=require("browser-sync").create();
// var reload = browserSync.reload;
const less=require("gulp-less");
const nodemon=require("gulp-nodemon");
// var browserSync = require('browser-sync').create();

gulp.task("less",function(){
	gulp.src("public/less/*.less")
	.pipe(less())
	.pipe(gulp.dest("public/css"));
});
var flag=true;
gulp.task('nodemon', function(cb) {
  if(flag){
    flag=false;
    var started = false;
    return nodemon({
      script: "./bin/www"
    }).on('start', function() {
      if (!started) {
        cb();
        started = true;
      }
    });
  }
  
});

gulp.task("default",function(){
	gulp.watch("public/less/*.less",['less']);
	gulp.watch(['app.js','routes/*.js','models/*.js'],['nodemon']);
});




