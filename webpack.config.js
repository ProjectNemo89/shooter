var webpackUglify = require('webpack-uglify-js-plugin');

module.exports = {

	entry: {
		app: "./app/assets/js/app.js"
	},
	output: {
		path: "./app/build/js",
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
		}
		]
	},
	plugins: [
		new webpackUglify({
 			cacheFolder: './app/assets/js/cached_uglify/',
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

	]
};