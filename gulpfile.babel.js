import gulp from 'gulp';
import postcss from "gulp-postcss";
import precss from 'precss';
import cssmin from 'gulp-clean-css';
import postcssImport from 'postcss-import';
import webpack from 'webpack';
import del from 'del';

const srcCSS = "./assets/style.css";
const destCSS = "./build/css";
const webpackConfig = require("./webpack.config.js");



gulp.task("css", () => {
	return gulp.src(srcCSS)
	.pipe(postcss([postcssImport, precss]))
	.pipe(cssmin({compatibility: "ie8", debug: true}, (details) => {
		console.log(details.name + ': ' + details.stats.originalSize + " bytes");
        console.log(details.name + ': ' + details.stats.minifiedSize + " bytes");
	}))
	.on('error', (err) => {
		if(err) {
			console.log(err.toString());
		}
		this.emit('end');
	})
	.pipe(gulp.dest(destCSS));
});

gulp.task('js', () => {
	webpack(webpackConfig, (err, stats) => {
		if(err) {
			console.log(err.toString());
		} else {
			console.log(stats.toString());
		}
	});
});

gulp.task('clean', () => {
	del(["./build/**", "!./build"]);
});


gulp.task("default", () => {
	gulp.watch("./assets/style.css", ["css"]);
	gulp.watch("./assets/js/app.js", ["js"]); 
});





