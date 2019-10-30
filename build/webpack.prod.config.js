const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig,{
    mode: 'production',
    devtool: 'nosources-source-map',
    output:{
        publicPath: 'http://cdn.com.cn',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/chunk_[name].[chunkhash:8].js'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                // BASE_URL: JSON.stringify('http://www.baidu.com/')
            }
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            favicon: path.resolve(__dirname,'../public/favicon.ico'),
            inject: true,
            hash: true,
            cache: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/chunk_[name].[contenthash:8].css'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
            analyzerMode: 'static',
            reportFilename: 'analyzer.html'
        })
    ],
    optimization:{
        minimizer:[
            new UglifyjsWebpackPlugin({
                exclude: /\.min\.js$/,
                cache:true,
                parallel: true,
                sourceMap: false,
                extractComments: false,
                uglifyOptions: {
                    compress: {
                        unused: true,
                        drop_debugger: true 
                    },
                    output: {
                        comments: false, 
                        beautify: false 
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessorOptions: {
                    safe: true,
                    autoprefixer: { disable: true },
                    mergeLonghand: false,
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            })
        ],
    }
})