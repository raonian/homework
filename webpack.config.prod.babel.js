// import path from 'path';
// import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel.js';

export default merge(baseConfig, {
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                use: [
                  'css-loader',
                  'sass-loader'
                ],
                fallback: 'style-loader'
              }
            ),
            exclude: /node_modules/
        }],
        postcss: [autoprefixer({browsers: ['last 2 versions']})]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            ignoreOrder: true
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        minimize: true
    }
});