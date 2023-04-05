const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './build'),
            publicPath: '/'
        },
        proxy: {
            '/api': 'http://localhost:3000'
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modues)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modues)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
    },
};