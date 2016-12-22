import gulp from 'gulp';
import postcss from "gulp-postcss";
import precss from 'precss';
import autoprefixer from "gulp-autoprefixer";
import cssmin from 'gulp-clean-css';
import postcssImport from 'postcss-import';
import webpack from 'webpack';
import del from 'del';
import sync from 'browser-sync';
import webpackUglify from "webpack-uglify-js-plugin";
import path from "path";
import modernizer from "gulp-modernizr";
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
		webpackConfig,
		srcDir: "./app/assets/js/**/*.js",
		dest: "./app/build/js/bundle.js",
        vendors: "./app/assets/js/vendors"
	},
	html: {
		src: "./app/index.html"
	},
	vue: {
		src: "./components/*.vue"
	}
}

gulp.task("dev:style", styleDev);
gulp.task("dev:scripts", jsDev);
gulp.task("dev", devWatch);
gulp.task("prod", gulp.parallel(jsProd, styleMin));
gulp.task("clean", clean);
gulp.task("dev:refresh", pageRefresh);
gulp.task("modernizer", modernize);


function styleDev() {
	return gulp.src(config.style.src)
			.pipe(postcss([postcssImport, precss]))
			.on('error', function(err) {
				console.log(err.toString());
				this.emit("end");
			})
			.pipe(autoprefixer())
			.pipe(gulp.dest(config.style.dest))
			.pipe(sync.stream());
}

function jsDev(done) {
	//mutiranje konfiguracije
	const config = configInstance();
	config.devtool = "source-map";
	
	//pokretanje webpack-a
	const compiler = webpack(config);
	compiler.run((err, stats) => {
		if(err) {
			console.log(err.toString());
		}
		console.log(stats.toString({
			colors: true,
			exclude: ["node_modules"]
		}));	

	});
	done();
}

function jsProd(done) {
	const config = configInstance();
	config.plugins.push(
		new webpackUglify({
				cacheFolder: path.resolve('./app/assets/js/cached_uglify/'),
				debug: true,
				minimize: true,
				sourceMap: false,
				output: {
					comments: false
				},
				compressor: {
					warnings: false
				}
		})	
	);
	const compiler = webpack(config);
	compiler.run((err, stats) => {
		if(err) console.log(err.toString({colors: true}));
	});	
	done();

}

function modernize() {
    return gulp.src([config.style.srcDir, config.js.srcDir])
        .pipe(modernizer({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest(config.js.vendors));
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
	gulp.watch([config.js.srcDir, config.vue.src], gulp.series(jsDev, (done) => {
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
			.pipe(autoprefixer({browsers: ['last 2 versions']}))
			.pipe(cssmin({compatibility: "ie8"}))
			.pipe(gulp.dest(config.style.dest))
}

function configInstance() {
	const config = webpackConfig.clone();

	return config;
}