// import a package
const path = require('path')

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
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    }
};