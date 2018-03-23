const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
    js: path.resolve(__dirname, 'app/js'),
    css: path.resolve(__dirname, 'app/css'),
    fonts: path.resolve(__dirname, 'app/fonts'),
    image: path.resolve(__dirname, 'app/img'),
    html: {
        pages: 'app/html/pages',
        components: path.resolve(__dirname, 'app/html/components')
    }
};

const generateHtmlPlugins = (templateDir) => {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];

        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false
        })
    });
}

const htmlPlugins = generateHtmlPlugins(dir.html.pages);

module.exports = {
    entry: [
        dir.js + '/app.js',
        dir.css + '/index.scss'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: dir.js,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: dir.css,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: "resolve-url-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: dir.image + '/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                include: dir.html.components,
                use: ['raw-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: dir.fonts,
                to: './fonts'
            },
            {
                from: dir.image,
                to: './img'
            }
        ])
    ].concat(htmlPlugins)
};