const path = require('path');
// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_POINTS = path.join(__dirname, 'src/index.tsx');

module.exports = {
    entry: ENTRY_POINTS,

    output: {
        filename: 'app.js',
        path: path.resolve(path.join(__dirname, 'dist')),
        publicPath: '/',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],

    devServer: {
        compress: false,
        port: 1337,
        open: true,
        historyApiFallback: true,
    },

    devtool: 'source-map',
};
