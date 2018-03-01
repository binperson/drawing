const path = require('path')
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist/js'),
        publicPath: './js'
    },
    module: {
        rules: [
            {
                test: /.js/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.join(__dirname, '../client/template.html')
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: false
        })
    ]
}

if(isDev){
    config.devServer = {
        host: '0.0.0.0',
        port: '8888',
        hot: true,
        contentBase: path.join(__dirname, '../dist'),
        overlay: {
            errors: true
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config


