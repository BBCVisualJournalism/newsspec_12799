const path = require('path');
const webpack = require('webpack');
const projectConfig = require('./config');

const config = {
    externals: [
        'vocab',
        'wrapper',
    ],

    resolve: {
        alias: {
            jquery: `${__dirname}/node_modules/jquery/dist/jquery.min`,
            template_engine: `${__dirname}/node_modules/template_engine/template_engine`,
            ShareTools: `${__dirname}/node_modules/@bbc/news-vj-sharetools/bin/sharetools.min`,
            ShareToolsTemplate: `${__dirname}/node_modules/@bbc/news-vj-sharetools/bin/templates/dropdown/template`,
        },
        modules: [
            `${__dirname}source/js`,
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'node_modules/@bbc'),
        ],
        extensions: ['.js'],
    },

    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')],
    },

    entry: {
        app: [`${__dirname}/source/js/app.js`],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /bower_components/,
                    /node_modules\/(?!(@bbc\/news-vj)).*/, // exclude all node modules except Visual Journalism ones
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                loose: true,
                            }],
                        ],
                    },
                },
            },
        ],
    },

    // only seems to work when running `webpack` directly
    stats: {
        colors: true,
    },

    // required when `debug` is `false - not sure why ("so the wrappers can add plugins"?)
    plugins: [],

    output: {
        library: 'app',
        libraryTarget: 'amd',
        path: `${process.cwd()}/${projectConfig.outputPath}/assets/`,
        filename: 'main.js',
    },
};

if (projectConfig.debug === 'false') {
    const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
    config.plugins.push(new UglifyJSPlugin());
}

module.exports = config;
