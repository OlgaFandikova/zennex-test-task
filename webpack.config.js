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
        extensions: ['', '.js', '.jsx', '.scss', '.png', '.jpeg', '.jpg', '.svg', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}