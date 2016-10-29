var gulp = require('gulp'),
	postcss = require("gulp-postcss"),
	precss = require('precss'),
	postcssImport = require('postcss-import');



gulp.task("css", function() {
	return gulp.src('./assets/style.css')
	.pipe(postcss([postcssImport, precss]))
	.on('error', function(err) {
		if(err) {
			console.log(err.toString());
		}
		this.emit('end');
	})
	.pipe(gulp.dest('./build/css'));
});



gulp.task("default", function() {
	gulp.watch("./assets/style.css", ["css"]); 
});





