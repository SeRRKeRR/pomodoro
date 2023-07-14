const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.sass$/;
const { DefinePlugin } = require('webpack');

module.exports = {
	target: 'node',
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.join(__dirname, '../src/server/server.js'),
	output: {
    globalObject: "this",
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
	resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.sass'] },
	externals: [nodeExternals()],
//	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.[tj]sx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [/*MiniCssExtractPlugin.loader, */{
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          }
        }, 'sass-loader'],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader', 'sass-loader'],
      }
    ]
	},
	optimization: { minimize: false },
  plugins: [new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`})]
};
