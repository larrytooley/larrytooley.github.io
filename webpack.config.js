const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', 'sass-loader'],
                publicPath: '/dist'
            })
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000,
        stats: 'errors-only',
        open: true,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Larry Tooley',
            // minify: {
            //     collapseWhitespace: true,
            // },
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details) 
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}