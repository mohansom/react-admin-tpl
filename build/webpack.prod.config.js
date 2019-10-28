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
        chunkFilename: 'js/[id].[chunkhash:8].js',
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
            chunkFilename: 'css/[id].[contenthash:8].css'
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
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
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks:{
            chunks: 'all',  // 同步代码走cacheGroups配置代码分割 异步代码直接代码分割
            minSize: 30000, // 模块大于30kb才做代码分割
            minChunks: 1, // 模块至少被一次引入才做代码分割
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups:{
                vendors: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename:'vendors.js'
                },
                default: {
                    chunks: 'initial',
                    priority: -20,
                    reuseExistingChunk: true, //如果一个模块已经被打包,再次打包忽略
                    filename: 'commons.js'
                }
            }
        }
    }
})