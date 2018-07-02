const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: [
        './src/css/index.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'src/app')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/css'),
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true,
				                url: false
                            }
                        },
                        {
                            loader: "resolve-url-loader"
                        },
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										browsers:['ie >= 10', 'last 4 version']
									})
								],
								sourceMap: true
							}
						},
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=10000&name=images/[name].[hash].[ext]',
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['src/app']),
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: './src/fonts',
                to: './fonts'
            },
            {
                from: './src/img',
                to: './img'
            },
			{
				from: './src/js',
				to: './js'
			},
            {
                from: './src/components',
                to: './components'
            }
        ]),
        new ProgressBarPlugin()
    ]
};
