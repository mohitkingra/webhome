var webpack = require('webpack');
var path = require('path');

var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // Since webpack 4 we will need to set in what mode webpack is running
  mode: 'production',
	// This will be the entry file for all of our React code
	entry: {
		'index' : './client/index.jsx',
		'world' : './client/world.jsx',
	},
  optimization: {
   minimizer:[
	new UglifyJsPlugin(),
    new CompressionPlugin({
    		test: /\.(js|jsx|jpg|json)$/
    	}),
   ],
   splitChunks: {
	chunks: 'async'
	}
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new BundleAnalyzerPlugin(),

  ],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/server/public/js/'),
		filename: '[name].bundle.js',
		publicPath: 'server/public/js/',
  },
  // Adding babel loader to compile our javascript and jsx files
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory',
					options: {
						presets: [
							'stage-0',
							'react',
							'env',
						],
						plugins: [
							'transform-class-properties',
						],
					},
				},
      		},
      		{
      			test: /\.(png|jpg)$/,
      			use:{
      				loader: 'url-loader',
      				options: {
      					limit: 300000
      				}
      			}   			
      		}
    ]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
