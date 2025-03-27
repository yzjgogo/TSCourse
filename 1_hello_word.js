"use strict";
/**
 0，ts解决了js类型不明确的问题，ts是强类型语言，解决目的是能在编译时发现错误，就不在运行时发现。
    js代码：var a = '',则你可以给a赋值字符串、对象、数字、undefine、NaN、null等等，这样编译期间编译器就无法提示类型错误，只有等到运行时才有可能报类型错误。
    ts代码：let a:string = '',则你只能给a赋值字符串类型，赋值其他类型，编译器立马报红。这就是强类型的有点。

 1,ts不能单独运行，即浏览器和node等都不认识它，我们需要将ts转为js才能正常使用。

 2，为了能将ts转为js我们需要给电脑搭建编译环境，即用npm安装typescript，命令：npm install typescript -g 。这是全局安装ts的命令，我们可以在cmd、git bash、vscode terminal等任意中断执行此命令安装ts。安装完成后可以用tsc --version命令查看安装的ts版本，我们也可以在安装ts时指定版本，例如npm install typescript@4.8.4 -g。 tsc其实就是指 ts compailer，即ts编译器。以后将ts编译为js也是用tsc命令，例如 tsc aa.ts会得到aa.js
  注意，想要在vscode的terminal中安装ts和使用tsc命令需要以管理员身份运行切搭配几个命令使用，教程参考：vscode的终端的用法.pdf，否则会报错，报错信息参考图片：vscode终端报错.png。
  教程中涉及到的命令如下：
  get-ExecutionPolicy
  set-ExecutionPolicy RemoteSigned
  get-ExecutionPolicy

  3，你要安装的ts的版本需要与你电脑安装的node版本相匹配，比如我的node版本是v12.22.11，我执行'npm install typescript -g'因为默认这个命令是安装最新版的ts，我记得当时是5.x.x记不清了，安装完留意看会提示一些版本和node版本不匹配的错误，因此，我执行了'npm install typescript@4.8.4 -g'指定了和codewhy视频里一样的4.8.4版本。如果报错我们可以先执行'npm uninstall -g typescript'卸载掉在重新安装。

  4，如果在使用npm过程中报错：
    npm ERR! code ETIMEDOUT
    npm ERR! errno ETIMEDOUT
    npm ERR! network request to https://xxxxx failed,reason: connect ETIMEDOUT 104.14.56.443
    ...
    npm ERR! newwork If you are behind a proxy,please make sure that the ....

    解决办法：
    npm config set proxy false
    npm cache clean
    可能只需要第一行命令，也可能两行都要执行下。
    参考图片：npm命令报错.jpg

    5，运行ts代码，(浏览器无法识别ts，需要把ts转为js)
    a，原始的繁琐运行方式：
     a1：编写好1_hello_word.ts后，在terminal终端执行'tsc 1_hello_word.ts'会生成1_hello_word.js文件
     a2：在跟以前一样使用1_hello_word.js即可，例如在aaa.html中<script src="./1_hello_word.js"></script>即可执行js。

    b，自动执行ts，我们不执行ts转js这一步，而是交给别的工具做，就好像直接运行ts一样：
     方式一：webpack配置，webpack有对应的loader来识别执行ts代码？这种方式视频没讲，只是给了个配置的文章;
     参考：
     使用webpack搭建直接执行ts的环境.pdf
     https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw


 *
*/
exports.__esModule = true;//这个先注释掉，以后能解决；
var message = 'hello work';
message = 'hello chengdu';
console.log(message);
