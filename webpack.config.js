var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: path.resolve(__dirname, './src/js/index.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 3000
	},
	module: {
		rules: [
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
	}
}