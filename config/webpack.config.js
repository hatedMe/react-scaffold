var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: '#eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './main.js'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname
        }]
    },
    resolve: {
        root: path.join(__dirname, "src"),
        modules: [
          path.join(__dirname, "src"),
          "node_modules"
        ]
      },
}