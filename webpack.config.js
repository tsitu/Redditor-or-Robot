var webpack = require("webpack");
var path = require("path");

var APP_SRC = path.resolve(__dirname, "src");
var APP_PUBLIC = path.resolve(__dirname, "public");

var config = {
    entry: APP_SRC + "/index.jsx",
    output: {
        path: APP_PUBLIC,
        filename: "code.js",
        publicPath: "/public/"
    },
    module: {
        loaders: [{
            include: APP_SRC,
            loader: "babel-loader",
        }]
    },
    devServer: {
        host: "192.168.0.108",
        port: 3000,
    },
};

module.exports = config;