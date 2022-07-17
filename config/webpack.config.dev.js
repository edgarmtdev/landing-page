const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  mode: 'devalopment',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    static: path.join(__dirname, '../build'),
    open: true,
    devMiddleware: {
      publicPath: '/',
    }
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserlist: ['last 3 versions']
                  })
                ]
              }
            }
          },
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: ['last 3 versions']
                  })
                ]
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ]
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../src/pages/index.html'),
      filename: path.join(__dirname, '../build/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}   