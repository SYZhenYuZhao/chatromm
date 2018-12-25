const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.js',
        vendor:[
            "react",
            "react-dom"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer:{
        contentBase: './dist',
        port: 3000,
        compress: true, //服务器压缩
        open: true,
        hot: true,
        disableHostCheck: true
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), //热加载
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template:'./index.html',
            minify:{
                removeAttributeQuotes:true, //删除属性的双引号
                removeTagWhitespace:true
            }
        })
    ]
}