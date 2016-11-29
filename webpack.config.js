var webpackUglify = require('webpack-uglify-js-plugin');
var path = require("path");


function config() {
	return {
		devtool: "source-map",
		entry: {
			app: path.resolve("./app/assets/js/app.js")
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
 			alias: {
   				 'vue$': 'vue/dist/vue.common.js'
  				   }
		},

		devServer: {
			inline: true,
			hot: true,
			contentBase: "./app/"
		}
	};
}

module.exports = config();
module.exports.clone = config;

