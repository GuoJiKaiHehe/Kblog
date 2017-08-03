const gulp=require("gulp");
// const browserSync=require("browser-sync").create();
const less=require("gulp-less");
const nodemon=require("gulp-nodemon");


gulp.task("less",function(){
	gulp.src("public/less/*.less")
	.pipe(less())
	.pipe(gulp.dest("public/css"));
});
gulp.task("nodemon",function(){
	nodemon({
		script:"./bin/www",
		env: { 'NODE_ENV': 'development' }
	})
})

gulp.task("default",function(){
	gulp.watch("public/less/*.less",['less']);
	gulp.watch(['app.js','routes/*.js','models/*.js'],['nodemon']);
});

