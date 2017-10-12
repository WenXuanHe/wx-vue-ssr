let path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/unit/specs/*.js'
        ],

        preprocessors: {
            // // add webpack as preprocessor
            // 'public/src/client/**/*.js': ['webpack', 'sourcemap'],
           'test/unit/specs/*.js': ['webpack', 'sourcemap']
        },

        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                rules: [{
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader'
                    }]
                }, {
                    test: /\.js$/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                ["env", {
                                    "modules": false,
                                    "targets": {
                                        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                                    }
                                }],
                                "stage-2"
                            ],
                            "plugins": ["transform-runtime"],
                            "env": {
                                "test": {
                                    "presets": ["env", "stage-2"],
                                    "plugins": ["istanbul"]
                                }
                            }
                        }
                    }],
                    exclude: /node_modules/
                }]
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
                alias: {
                    'vue': 'vue/dist/vue.js',
                    '$components': path.resolve(__dirname, 'src/client/components'),
                    '$router': path.resolve(__dirname, 'src/client/router'),
                    '$store': path.resolve(__dirname, 'src/client/store'),
                    '$utils': path.resolve(__dirname, 'src/client/utils'),
                    '$views': path.resolve(__dirname, 'src/client/views'),
                    '$styles': path.resolve(__dirname, 'src/client/styles')
                }
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],


        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless', 'MyHeadlessChrome'],
        singleRun: false,
    })
};
