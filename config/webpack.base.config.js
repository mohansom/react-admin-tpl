const loader = require('./loader');
const path = require('path');
// const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        main:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'../build'),
        publicPath: '/'
    },
    resolve:{
        extensions: ['.js', '.jsx', 'json','.ts'],
        alias:{
            '@':resolve('src')
        }
    },
    resolveLoader:{
        modules:['node_modules']
    },
    module:{
        rules:[
            loader.css(),
            loader.scss(),
            loader.babel(),
            loader.images(),
            loader.fonts(),
            loader.medias(),
        ]
    }
}