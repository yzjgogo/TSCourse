
/*
  1:package.json来自 'npm init' 命令

  2：使用webpack需要同时安装webpack和webpack-cli，webpack-cli是干嘛的，第一次学习的时候好像也没安装也能使用
  'npm install webpack webpack-cli -D'
  
  3：要让webpack认识ts并解析成js需要安装'ts-loader'
  'npm install ts-loader -D'

  4：HtmlWeabpckPlugin用来帮我们在dist下生产index.html
  'npm install html-webpack-plugin -D'

  5：开启本地服务
  'npm install webpack-dev-server -D'
  devServer: {}下没有添加任何配置
  package.json -> scripts -> "serve":"webpack serve"
  最终我们执行npm run serve即可在控制台生成访问路径。
  这个命令和E:\web\baseWeb\WebpackStudy\07_webpack搭建本地服务页面热更新_引出配置文件分离\package.json不一样
  区别参考：两种本地服务命令.md

  6：ts-loader需要依赖tsconfig.json来决定怎么解析ts，因此要执行'tsc --init'产生tsconfig.json

  7:如果我们已经使用命令'npm install typescript -g'安装了全局的typescript，但是在运行当前项目时，会报错，报错内容如：Could not load TypeScript. Try installing with `yarn add typescript` or `npm install typescript`. If TypeScript is installed globally, try using `yarn link typescript` or `npm link typescript`.
  可以尝试使用link命令。这会创建一个符号链接，指向全局安装的TypeScript，使其在项目中可用：
  'npm link typescript'

  7：tsconfig.json
  https://www.typescriptlang.org/tsconfig

  8:待学jsx

  9：
  axios的封装：
  https://juejin.cn/post/7071518211392405541

*/

const path = require('path')
const HtmlWeabpckPlugin = require("html-webpack-plugin")

module.exports = {
    // mode: "development",
    mode: "production",
    entry: './src/index.ts',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    resolve: {
      extensions: [".ts", ".js", ".cjs", ".json"]
    },
    module:{
      rules:[
        {
          test: /\.ts$/,
          loader: "ts-loader"
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          type: "asset/resource"
        }
      ]
    },
    plugins: [
      new HtmlWeabpckPlugin({
        template: "./index.html"
      })
    ],
    devServer: {},
}