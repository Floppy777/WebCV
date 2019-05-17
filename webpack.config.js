const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
}

module.exports = {
    entry: "./src/scss/app.scss",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./styles.css"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
};