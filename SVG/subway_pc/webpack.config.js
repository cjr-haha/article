const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './test/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.css']
    },
    module: {
        noParse: [/jquery/],
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                include: resolve('./src'),
                exclude: /node_modulses/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './test/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 5000,
        open: true
    }
}