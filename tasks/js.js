module.exports = function (grunt) {
    var webpackConfig = require(process.cwd() + '/webpack.config.js');
    var webpack = require('webpack');

    grunt.registerTask('js', ['eslint', 'runWrapperJsTasks', 'webpack']);

    // the webpack config object is passed around and changed
    // by the wrappers in the inject-js task
    grunt.config.set('defaultWebpackConfig', webpackConfig);
};
