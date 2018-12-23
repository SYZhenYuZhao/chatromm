const HtmlWebPackPlugin = require("html-webpack-plugin");

module.export = {

    // entry:{
    //     app:'./src/index.js',
    //     vender:[
    //         'react',
    //         'react-dom',
    //     ]
    // },
    // output:{
    //     path: 'dist',
    //     filename: env('[name].js', '[name].[' + hashType + '].js'),
    //     publicPath: '/dist/',
    //     chunkFilename: env('[name].js', '[name].[' + hashType + '].js')
    // }
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8088,
        host: "localhost",
    }
}