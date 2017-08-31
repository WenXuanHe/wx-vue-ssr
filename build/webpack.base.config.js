let webpack = require('webpack');
let path = require("path");

module.exports = {
    // entry: {
    //     client: path.resolve(__dirname, "src/entry-client.js"),
    //     server: path.resolve(__dirname, "src/entry-server.js")
    // },
    output: {
        path: path.resolve(__dirname, "../", 'dist/'),
        filename: "[name].js",
        //配置按需加载[chunkhash:5]
        chunkFilename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': 'vue-style-loader!css-loader!postcss-loader',
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },
}
