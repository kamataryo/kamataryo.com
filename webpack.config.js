const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const __NODE_ENV__ = JSON.stringify(process.env.NODE_ENV) || 'development'

const mainEntry = ['./src/main.tsx']

const devEntries = [
  // activate HMR for React
  'react-hot-loader/patch',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint
  'webpack-dev-server/client?http://localhost:3000',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates
  'webpack/hot/only-dev-server',
]

module.exports = {

  entry: __NODE_ENV__ === 'development' ? mainEntry.concat(devEntries) : mainEntry,

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devtool: __NODE_ENV__ === 'development' ? 'source-map' : void 0,

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      },
    ]

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new CopyWebpackPlugin([
      { from: './assets',     to: path.join(__dirname, '/dist') },
      { from: './_redirects', to: path.join(__dirname, '/dist') },
    ]),

  ],

  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    compress: true,
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
}
