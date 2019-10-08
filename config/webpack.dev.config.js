/*
 * @Autor: 刘建峰
 * @Date: 2019-07-22 14:16:26
 * @LastEditors: 刘建峰
 * @LastEditTime: 2019-07-22 14:18:27
 */

const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output:{
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].js',
    },
    devServer:{
        historyApiFallback: true,
        clientLogLevel: 'warning',
        host: 'localhost',
        port: '3006',
        compress: true,
        hot: true,
        open: true,
        overlay:{
            warnings: false,
            errors: true
        },  
        proxy:{
            '/proxy':{
                target: "" , //接口域名
                changeOrigin:true, 
                pathRewrite:{
                    '^/proxy':'' 
                }
            }
        },
        watchOptions:{
            // poll: '1000',
            ignored: /node_modules/
        }
    },  
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                // BASE_URL: JSON.stringify('http://www.baidu.com/')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            favicon: path.resolve(__dirname,'../public/favicon.ico'),
            inject: true,
            hash: true,
            cache: true,
        })
    ]
})

module.exports = devWebpackConfig