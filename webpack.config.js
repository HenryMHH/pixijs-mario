const HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')

module.exports = {
	entry: './entry.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},
	context: path.resolve(__dirname, 'src'),
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
	plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
	module: {
		rules: [
			{
				test: /\.(png|gif|jpg)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
		],
	},
}
