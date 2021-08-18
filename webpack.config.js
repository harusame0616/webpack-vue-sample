const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    mode: 'development',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    plugins: [new VueLoaderPlugin(), new HotModuleReplacementPlugin()]
};
