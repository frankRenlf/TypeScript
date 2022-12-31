// import a package
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// webpack configuration
module.exports = {
    mode: "production",
    // input file entry
    entry: "./src/index.ts",
    // pack the output file
    output: {
        // pack dir
        path: path.resolve(__dirname, 'dist'),
        // output file name
        filename: "bundle.js"
    },
    // modules in package
    module: {
        // added rules
        rules: [
            {
                // rules for test
                test: /\.ts$/,
                use: [
                    // config babel
                    {
                        loader: 'babel-loader',
                        options: {
                            // set Predefine
                            presets: [
                                // appoint env
                                "@babel/preset-env",
                                // config info
                                {
                                    // Browser to be compatible
                                    targets: {
                                        "chrome": "88"
                                    },
                                    // set core-js edition
                                    "core-js": 3,
                                    // the use of core-js
                                    "useBuiltIns": "usage",
                                }
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-modules/
            }
        ]
    },
    // config the webpack plugin
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "custom title"
            template: "./src/index.html"
        }),
    ],
    // set the import modules
    resolve: {
        extensions: ['.ts', '.js']
    }
};