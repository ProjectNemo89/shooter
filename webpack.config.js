const webpackUglify = require('webpack-uglify-js-plugin');
const path = require("path");


function config() {
	return {
		devtool: "source-map",
		entry: {
			bundle: __dirname + "/app/assets/js/app.js"
		},
		output: {
			path: path.join(__dirname, "app/build", "js"),
			filename: "bundle.js"

		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					query: {
						presets: ["es2015"]
					}
				},
				{
					test: /\.vue$/,
					loader: "vue-loader"
				}
			]
		},
		plugins: [],
		resolve: {
			root: path.resolve(__dirname),
			extensions: ['', '.js'],
 			alias: {
   				 'vue$': 'vue/dist/vue.common.js',
					"jquery": "jquery/src/jquery", 
				  "TweenMax": "gsap/src/uncompressed/TweenMax",
				  "TweenLite": "gsap/src/uncompressed/TweenMax",
				  "ScrollToPlugin": "gsap/src/uncompressed/plugins/ScrollToPlugin"
  				   }
		}
	};
}

module.exports = config();
module.exports.clone = config;

