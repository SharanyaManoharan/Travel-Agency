var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();



gulp.task('watch',function(){

	browserSync.init({
		notify: false,
		server:{
			baseDir: "app"
		}
	});
	//calling the gulp keyword, path to watch the 
	//required file, 

	/*
	watch('./app/index.html', 
		 function(){
	//function here is calling the
	//above gulp.task of html and start it using gulp.start
		browserSync.reload();
	});*/

	watch("./app/index.html").on('change',browserSync.reload);

	watch('./app/assets/styles/**/*.css',
		function(){
			gulp.start('cssInject');
		});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

});


gulp.task('cssInject',['css'] ,function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'],function(){
	browserSync.reload();
});