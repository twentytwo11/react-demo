const path = require('path');

module.exports = {

    //入口文件
    entry: path.join(__dirname, 'src/index.js'),

    //输出路径及文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    //src下js结尾的文件用babel编译
    //cacheDirectory缓存编译结果，下次编译加速
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    //服务器配置
    devServer: {
        port: 8082,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    //react热加载
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    //配置路径别名
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        }
    },
    //devtool优化
    devtool: 'inline-source-map'

};

