const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry : './src/index.tsx',
    output : {
        path: path.resolve(__dirname , 'dist'),
        filename: '[fullhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions : ['.tsx' , '.ts' , '.js' , '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    CssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new CssExtractPlugin({
            filename: 'css/[fullhash].css',
            linkType:'text/css'
        })
    ],
    devServer: {
        port: 8080,
        open: true,
        historyApiFallback: true
    }

}