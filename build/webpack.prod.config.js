const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig,{
    mode: 'production',
    devtool: 'nosources-source-map',
    output:{
        publicPath: '/',
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/chunk_[name].[chunkhash:8].js'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new CleanWebpackPlugin(),
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
            new OptimizeCssAssetsPlugin({})
        ],
    }
})