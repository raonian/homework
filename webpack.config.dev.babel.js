import path from 'path';
import webpack from 'webpack';
// import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel.js';

const STATIC_PATH = 'static';
const LOCAL_HOST = process.env.npm_package_server_local_host;
const LOCAL_PORT = process.env.npm_package_server_local_port;

export default merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  // 热替换
        new CleanWebpackPlugin(['build']),                  // 清除编译目录
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['vendor.js']
        })
    ],
    devServer: {
        host: LOCAL_HOST,
        port: LOCAL_PORT,
        disableHostCheck: true,
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build')
    }
});