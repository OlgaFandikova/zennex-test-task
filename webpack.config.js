const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.png', '.jpeg', '.jpg', '.svg', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 3,
                        modules: true,
                        localIdentName: '[name]--[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'autoprefixer-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('postcss-short'),
                                require('postcss-cssnext')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.jpg$/,use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/jpg&name=img/[name].[ext]'
                    }
                }
            }
        ]
    }
}