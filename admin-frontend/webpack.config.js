const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = (env = {}) => ({
    mode: "development",
    cache: false,
    devtool: "source-map",
    optimization: {
        minimize: false,
    },
    target: "web",
    entry: path.resolve(__dirname, "./src/main.js"),
    // output: {
    //   path: path.resolve(__dirname, './dist'),
    //   publicPath: '/dist/'
    // },
    output: {
        publicPath: "auto",
    },
    resolve: {
        extensions: [".vue", ".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader",
                    options: { limit: 8192 },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ModuleFederationPlugin({
            name: "admin",
            filename: "remoteEntry.js",
            remotes: {
            },
            exposes: {
                "./Post": "./src/components/Post.vue",
                "./Posts": "./src/views/Posts.vue",
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        compress: true,
        port: 3002,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },
});
