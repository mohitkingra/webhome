var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

module.exports = {
  // Since webpack 4 we will need to set in what mode webpack is running
  mode: 'production',
	// This will be the entry file for all of our React code
	entry: [
		'./client/index.jsx',
	],
  optimization: {
   minimizer:[
	new UglifyJsPlugin({
	include: /\.min\.js$/,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
   ],
   splitChunks:{
	chunks: 'all'
	}
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new BundleAnalyzerPlugin(),
  ],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/server/public/js/'),
		filename: 'bundle.js',
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
      					limit: 25000000
      				}
      			}   			
      		}
    ]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
