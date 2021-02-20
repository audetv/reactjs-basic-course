const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: "bundle.js",
        publicPath: "/static/build/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }
                        ]
                    ]
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
