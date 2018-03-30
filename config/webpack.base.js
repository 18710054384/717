//dev:起服务，不用进行压缩
//build:不用起服务，要进行压缩，代码分离
// "dev": "cross-env NODE_ENV=development webpack-dev-server --color --profile --progress --config config/webpack.dev.js",
// "build": "cross-env NODE_ENV=production webpack --color --profile --progress --config config/webpack.build.js"
let path = require('path')
let dir = process.cwd();//获取当前程序运行的目录
let baseConfig = {//commonjs规范
    entry:{
        "bundle":dir+"/src/main"
    },
    output: {
        "path": dir+"/dist",
        "filename":"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    presets:['es2015']
                },
                exclude:[/node_modules/]
            },
            {
                test:/\.(css|scss|sass)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                use:['url-loader']
            },
            {
                test:/\.(jpg|jpeg|gif|png)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports = baseConfig