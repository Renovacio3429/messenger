const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            api: path.resolve(__dirname, 'src/api/'),
            components: path.resolve(__dirname, 'src/components/'),
            controllers: path.resolve(__dirname, 'src/controllers/'),
            core: path.resolve(__dirname, 'src/core/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            service: path.resolve(__dirname, 'src/service/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            static: path.resolve(__dirname, 'src/static/'),
            utils: path.resolve(__dirname, 'src/utils/'),
            hocs: path.resolve(__dirname, 'src/hocs/'),
            handlebars: "handlebars/dist/handlebars.min.js",
        },
        extensions: ['.ts', '.js', '.json'],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', "css-loader",'postcss-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
