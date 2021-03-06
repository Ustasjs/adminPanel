const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const commonConfig = {
  entry: {
    index: PATHS.source + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js'
  },
  resolve: {
    alias: {
      img: path.resolve(__dirname, 'src/assets/img'),
      fonts: path.resolve(__dirname, 'src/assets/fonts')
    },
    modules: ['node_modules', path.resolve(__dirname, 'src/components')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'common'],
      template: PATHS.source + '/index.html',
      inject: 'true'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]'
        }
      }
    ]
  }
};

const developmentConfig = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "globals.scss";',
              includePaths: [path.resolve(__dirname, 'src')]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devServer: {
    open: true,
    port: 8000,
    historyApiFallback: true,
    publicPath: 'http://localhost:8000/adminpanel/',
    openPage: 'adminpanel/'
  }
};

const productionConfig = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                data: '@import "globals.scss";',
                includePaths: [path.resolve(__dirname, 'src')]
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};

const productionEnv = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ]
}

const demonstrationEnv = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('demonstration'),
    })
  ]
}

module.exports = function (env) {
  if (env === 'production') {
    return merge(commonConfig, productionConfig, productionEnv);
  }
  if (env === 'demonstration') {
    return merge(commonConfig, productionConfig, demonstrationEnv);
  }
  if (env === 'development') {
    return merge(commonConfig, developmentConfig);
  }
};
