'use strict';
const webpack = require('webpack');
const path = require('path');
const root = path.join(__dirname, './');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    devtool: 'source-map',
    entry: {
      script: path.join(root, 'src/js/script.js')
    },
    output: {
      path: path.join(root, 'public'),
      filename: '[name].js'
    },
    optimization: {
      //splitChunks: {
      //  name: 'vendor',
      //  chunks: 'initial'
      //},
      minimizer: [
        new TerserPlugin()
      ],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env'
                ]
              }
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {url: false}}
          ],
        }
      ]
    },
    resolve: {
      modules: [
        path.join(root, '/src'),
        'node_modules'
      ],
      extensions: ['*', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        //'vue-router$': 'vue-router/dist/vue-router.esm.js'
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
];
