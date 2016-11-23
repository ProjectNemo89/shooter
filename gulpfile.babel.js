import gulp from 'gulp';
import postcss from "gulp-postcss";
import precss from 'precss';
import cssmin from 'gulp-clean-css';
import postcssImport from 'postcss-import';
import webpack from 'webpack';
import del from 'del';
import sync from 'browser-sync';

const webpackConfig = require("./webpack.config.js");

const syncOpts = {
	server: {
		baseDir: 'app'	
	}	
};

const config = {
	style: {
		src: "./app/assets/style.css",
		srcDir: "./app/assets/**/*.css",
		dest: "./app/build/css"
	},
	js: {
		webpackConfig: require("./webpack.config.js"),
		srcDir: "./app/assets/js/**/*.js",
		dest: "./app/build/js/bundle.js"
	},
	html: {
		src: "./app/index.html"
	}
}

gulp.task("dev:style", styleDev);
gulp.task("dev:scripts", jsDev);
gulp.task("dev", devWatch);
gulp.task("prod", gulp.parallel("dev:scripts", styleMin));
gulp.task("clean", clean);
gulp.task("dev:refresh", pageRefresh);


function styleDev() {
	return gulp.src(config.style.src)
			.pipe(postcss([postcssImport, precss]))
			.pipe(gulp.dest(config.style.dest))
			.pipe(sync.stream());
}

function jsDev(done) {
	webpack(webpackConfig, (err, stats) => {
		if(err) {
			console.log(err.toString());
		}
	});
	done();
}

function clean() {
	return del(["./app/build/**", "!./app/build"]);
}

function pageRefresh() {
	return sync.reload(config.js.srcDir);
}

function devWatch() {
	sync(syncOpts);
	gulp.watch(config.style.srcDir, gulp.series('dev:style'));
	gulp.watch(config.js.srcDir, gulp.series("dev:scripts", (done) => {
		sync.reload();
		done();
		})
	);
	gulp.watch(config.html.src, (done) => {
		sync.reload();
		done();
	});
}

function styleMin() {
		return gulp.src(config.style.src)
			.pipe(postcss([postcssImport, precss]))
			.pipe(cssmin({compatibility: "ie8"}))
			.pipe(gulp.dest(config.style.dest))
}


	// .pipe(cssmin({compatibility: "ie8", debug: true}, (details) => {
	// 	console.log(details.name + ': ' + details.stats.originalSize + " bytes");
 //        console.log(details.name + ': ' + details.stats.minifiedSize + " bytes");
	// }))




