import path from 'path';
import webpack from 'webpack';
// import precss from 'precss';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

const STATIC_PATH = 'static';
// const extractVendor = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].vendor.css`);
// const extractStyle = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].style.css`);
const LOCAL_HOST = process.env.npm_package_server_local_host;
const LOCAL_PORT = process.env.npm_package_server_local_port;

export default {
    // context: './src',
    entry: {
        main: ['./src/index.js'],
        vendor: ['react', 'react-dom', 'babel-polyfill']
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'build'),
        filename: `${STATIC_PATH}/js/[hash].[name].js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        },{
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(scss|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                'postcss-loader'
            ],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[ext]'
                }
            }]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    mimetype: 'application/font-woff',
                    name: 'fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    mimetype: 'application/font-woff',
                    name: 'fonts/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        // extractVendor,
        // extractStyle,
        // new CleanWebpackPlugin(['build']),                  // 清除编译目录
        // new webpack.optimize.CommonsChunkPlugin('vendor'),  // 提取公共模块
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer({browsers: ['last 2 versions']})]
            }
        }),
        new HtmlWebpackPlugin({                             // 主页面入口index.html
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};