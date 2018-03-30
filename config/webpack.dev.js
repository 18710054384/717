let webpack = require('webpack')
let baseConfig = require('./webpack.base.js')
let htmlWebpackPlugin = require('html-webpack-plugin')
let DefinePlugin = webpack.DefinePlugin

baseConfig.plugins.push(new DefinePlugin({
    "process.env":'"development"'
}))

baseConfig.devServer={
    historyApiFallback:true,//防止出现404
    inline:true,
    open:true,
    port:3000,
    noInfo:true
}
baseConfig.devtool="eval-source-map"
// baseConfig.plugins.push(new htmlWebpackPlugin({
//     template:'index.html'
// }))
module.exports=baseConfig