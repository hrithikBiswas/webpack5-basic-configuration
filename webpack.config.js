const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        bootstrap: "./src/js/bootstrap.js",
        swiper: "./src/js/swiper.js",
        scrollreveal: "./src/js/scrollreveal.js",
        index: "./src/js/index.js",
    },
    output: {
        filename: "./js/[name]-bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 5050,
        open: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images",
                    esModule: false,
                },
            },
            {
                test: /\.(mp4|webm|wmv)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "Video",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name]-bundle.css",
            chunkFilename: "./css/[id].css",
        }),
    ],
};
