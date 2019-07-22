/*
 * @Autor: 刘建峰
 * @Date: 2019-07-22 14:16:26
 * @LastEditors: 刘建峰
 * @LastEditTime: 2019-07-22 14:18:16
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
let dev = process.env.NODE_ENV === 'development'

let styleLoader = {
    loader: 'style-loader',
    options:{
        sourceMap:dev
    }
};

let cssLoader = {
    loader: 'css-loader',
    options:{
        sourceMap:dev,
    }
};

let postcssLoader = {
    loader: 'postcss-loader',
    options:{
        sourceMap:dev,
    }
};

let scssLoader = {
    loader: 'sass-loader'
};

let scssResourcesLoader = {
    loader: 'sass-resources-loader',
    options: {
        resources: [
            path.resolve(__dirname, '../src/style/index.scss'),
        ]
    }
};

// css
exports.css = () => {
    return{
        test: /\.css$/,
        exclude: /\.m\.css$/,
        use:[dev?styleLoader:MiniCssExtractPlugin.loader,cssLoader,postcssLoader]
    }
}
// scss 
exports.scss = () => {
    return{
        test: /\.scss$/,
        exclude:/node_modeles/,
        use:[dev?styleLoader:MiniCssExtractPlugin.loader,cssLoader,postcssLoader,scssLoader,scssResourcesLoader]
    }
}

// babel
exports.babel = () => {
    return{
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname,'../src'),
        loader: 'babel-loader',
    }
}

// images

exports.images = (opt = {}) => {
    return {
      test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
      use: [
        {
            loader: 'url-loader',
            options: {
                limit: 3000,
                name: opt.filename || 'images/[name].[hash:8].[ext]'
            }
        },
      ]
    }
}
// fonts
exports.fonts = (opt = {}) => {
    return {
        test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)??$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: opt.filename || 'fonts/[name].[hash:8].[ext]'
        }
    }
};

// media
exports.medias = (opt = {}) => {
    return {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
            limit: 3000,
            name: opt.filename || 'medias/[name].[hash:8].[ext]'
        }
    }
};