// tests/karma.conf.cjs
module.exports = function(config) {
    config.set({
        basePath: '..',
        frameworks: ['jasmine'],

        files: [
            // Incluir archivos CSS globales primero
            { pattern: 'src/styles/global.css', watched: true, included: true, served: true },
            { pattern: 'src/styles/App.css', watched: true, included: true, served: true },
            // Archivos de prueba
            'tests/specs/**/*.spec.js'
        ],

        preprocessors: {
            'tests/specs/**/*.spec.js': ['webpack'],
            'src/**/*.jsx': ['webpack']
            // Los CSS no necesitan preprocesador webpack
        },

        webpack: {
            mode: 'development',
            resolve: {
                extensions: ['.js', '.jsx', '.css']
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
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    url: true, // Permitir URLs en CSS
                                    import: true // Permitir imports en CSS
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(jpg|jpeg|png|gif|svg)$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'images/[hash][ext][query]'
                        }
                    }
                ]
            }
        },

        // Servir archivos estáticos
        proxies: {
            '/assets/': '/base/src/assets/'
        },

        browsers: ['Chrome'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        restartOnFileChange: true,
        browserNoActivityTimeout: 10000,

        // Configuración para servir archivos estáticos
        static: {
            directory: 'public'
        }
    });
};