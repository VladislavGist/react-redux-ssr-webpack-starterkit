const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const outputPath = path.resolve(__dirname, "./dist");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV

const webpackConfig = {
	entry: {
		app: [
			"react-hot-loader/patch",
			path.resolve(__dirname, "./src/index.js")
		]
	},
	output: {
		path: outputPath,
		filename: "js/[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: "eslint-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
					publicPath: "../",
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				}))
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				loader: "file-loader",
				options: {
					name: "images/[name].[ext]"
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[ext]"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./src/assets/index.html"),
			filename: "index.html",
			path: outputPath
		}),
		new ExtractTextPlugin("./css/[name].css"),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourseMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: "localhost"
	}
};

module.exports = webpackConfig;