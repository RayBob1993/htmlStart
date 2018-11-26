const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

function generateHtmlPlugins (templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

	return templateFiles.map(item => {
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
			inject: false,
			minify: false
		})
	})
}

const htmlPlugins = generateHtmlPlugins('./pages');

module.exports = {
	entry: [
		'./css/index.scss'
	],
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, 'css'),
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							sourceMap: true,
							plugins: () => [
								autoprefixer({
									browsers: ['ie >= 10', 'last 4 version']
								}),
								require('cssnano')({
									preset: ['default', {
										discardComments: {
											removeAll: true,
										},
									}]
								})
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{ 
				test: /\.handlebars/, 
				loader: "handlebars-loader",
				query: {
					partialDirs: [
						path.join(__dirname, 'components')
					]
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		open: true,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/style.bundle.css"
		}),
		new CopyWebpackPlugin([
			{
				from: './fonts',
				to: './fonts'
			},
			{
				from: './img',
				to: './img'
			},
			{
				from: './js',
				to: './js'
			}
		]),
		new ProgressBarPlugin()
	].concat(htmlPlugins)
};
