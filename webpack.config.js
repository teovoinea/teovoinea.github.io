const webpack = require('webpack');

var config = {
	entry: './main.js',
	devTool: 'cheap-module-source-map',

	output: {
		path: './',
		filename: 'index.js',
	},

	devServer: {
		inline: true,
		port: 8080
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
			'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}

module.exports = config;
