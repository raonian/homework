// import path from 'path';
// import webpack from 'webpack';
// import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel.js';

export default merge(baseConfig, {
    // module: {
    //     rules: [{
    //         test: /\.(scss|css)$/,
    //         use: ExtractTextPlugin.extract(
    //             {
    //                 use: [
    //                     'css-loader',
    //                     'sass-loader'
    //                 ],
    //                 fallback: 'style-loader'
    //             }
    //         ),
    //         exclude: /node_modules/
    //     }]
    // },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['build'])
        // new ExtractTextPlugin({
        //     filename: '[name].css',
        //     allChunks: true,
        //     ignoreOrder: true
        // })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        minimize: true
    }
});