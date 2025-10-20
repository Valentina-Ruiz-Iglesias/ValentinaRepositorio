// tests/karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '..',
        frameworks: ['jasmine'],

        files: [
            'tests/specs/**/*.spec.js'
        ],

        preprocessors: {
            'tests/specs/**/*.spec.js': ['webpack'],
            'src/**/*.jsx': ['webpack']
        },

        webpack: {
            mode: 'development',
            resolve: {
                extensions: ['.js', '.jsx']
            },
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-react']
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    },
                    {
                        test: /\.(jpg|jpeg|png|gif|svg)$/,
                        type: 'asset/inline'
                    }
                ]
            }
        },

        browsers: ['Chrome'],
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        restartOnFileChange: true,

        // Timeout aumentado para cargar React
        browserNoActivityTimeout: 10000
    });
};