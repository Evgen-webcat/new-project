var path = require('path');
var glob = require('glob');
var webpack = require('webpack');

module.exports = {
    entry: {
        dependencies: './js/dependencies.js',
        app: glob.sync('./js/app/*.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
}
