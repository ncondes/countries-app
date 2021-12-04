const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), 
    },
    mode: 'development',
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias:  {},
    },
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
}