var webpack = require('webpack')
var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname),
	entry: path.resolve(__dirname, './src/js/root.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'react-test',
			template: './index.html',
			filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
