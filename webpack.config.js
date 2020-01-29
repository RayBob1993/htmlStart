const { resolve, join, parse } = require('path');
const { readdirSync } = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const autoprefixer = require('autoprefixer');

function generateHtmlPlugins (templateDir) {
  const templateFiles = readdirSync(resolve(__dirname, templateDir));

  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
      minify: false
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/pages');

module.exports = {
  entry: [
    './src/assets/scss/index.scss'
  ],
  output: {
    path: resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
  },
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: resolve(__dirname, './src/assets/scss'),
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
                  browsers: [
                    'ie >= 11'
                  ]
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
            join(__dirname, 'src/components')
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/fonts',
        to: './fonts'
      },
      {
        from: './src/assets/img',
        to: './img'
      },
      {
        from: './src/js',
        to: './js'
      }
    ]),
    new ProgressBarPlugin(),
  ].concat(htmlPlugins)
};
