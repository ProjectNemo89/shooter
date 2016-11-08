import gulp from 'gulp';
import postcss from "gulp-postcss";
import precss from 'precss';
import cssmin from 'gulp-clean-css';
import postcssImport from 'postcss-import';
import webpack from 'webpack';
import del from 'del';
import sync from 'browser-sync';

const srcCSS = "./app/assets/style.css";
const destCSS = "./app/build/css";
const webpackConfig = require("./webpack.config.js");
const syncOpts = {
	server: {
		baseDir: 'app'	
	}	
};

gulp.task("css", () => {
	return gulp.src(srcCSS)
	.pipe(postcss([postcssImport, precss]))
	.on('error', (err) => {
		if(err) {
			console.log(err.toString());
		}
		this.emit('end');
	})
	.pipe(gulp.dest(destCSS))
	.pipe(sync.stream());
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
	del(["./app/build/**", "!./app/build"]);
});

gulp.task('refresh', () => {
	sync(syncOpts);
});


gulp.task("default", ["refresh"], () => {
	gulp.watch(["./app/assets/css/modules/*.css", "./app/assets/*.css"], ["css"]);
	gulp.watch(["./app/assets/js/app.js", "./app/assets/js/modules/*.js"], ["js"], () => sync.reload()); 
	gulp.watch("./app/index.html", () => sync.reload());
});


	// .pipe(cssmin({compatibility: "ie8", debug: true}, (details) => {
	// 	console.log(details.name + ': ' + details.stats.originalSize + " bytes");
 //        console.log(details.name + ': ' + details.stats.minifiedSize + " bytes");
	// }))




