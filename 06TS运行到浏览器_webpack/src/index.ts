import { sum } from "./utils/math";

console.log(`计算：${sum(1,2)}`)

/*
  使用内置类型声明
*/
//document来自lib.dom.d.ts
const h2EL = document.createElement("h2")
h2EL.textContent = "我是任意内容"
document.body.append(h2EL)
//Promise来自lib.es2018.promise.d.ts
const promise = new Promise((resolve,reject)=>{
  console.log("==--==")
})
//startsWith来自lib.es2015.core.d.ts
const message = "订个蛋糕"
console.log(message.startsWith("订"))


/*
  使用第三方库时的类型声明：分三种
  1：第三库本省自带类型声明，install后自己就有了；
  2：第三库自己没有，但是社区的公有库DefinitelyTyped存放了该库的类型声明；
  3：第三库也没有，社区也没有；
*/

/*
1：第三库本省自带类型声明，install后自己就有了；
例如axios
npm install axios后我们可以直接导入axios库而不会报错
因为它自带类型声明文件：06TS运行到浏览器_webpack\node_modules\axios\index.d.ts
*/
import axios from "axios" //不报错
import type { AxiosRequestConfig, AxiosInstance } from "axios" //不报错

/*
2：第三库自己没有，但是社区的公有库DefinitelyTyped存放了该库的类型声明；
例如：react
npm install react后，虽然已经安装了react，但是import仍然报错，因为它本身灭有提供类型声明
06TS运行到浏览器_webpack\node_modules\react  你在该路径下找不到**.d.ts文件，且你会发现react是用js写的。
npm install @types/react --save-dev后，就自动不报错了，因为安装后在如下路径下找到了类型声明：
/06TS运行到浏览器_webpack\node_modules\@types\react\index.d.ts

那么问题来了，比如我问想使用第三方xxx，npm install xxx后发现没有类型定义，我们去哪找@types/xxx这个类型定义内：
在以前：
一般可以通过社区的一个公有库DefinitelyTyped找到类型声明文件
该库的GitHub地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
这个地址是源码，我们不应该在这里找，我们应该在：
https://www.typescriptlang.org/dt/search?search=
这里搜索对应的@types/xxx，然后npm install @types/xxx --save-dev 即可
但是现在这个网址好像不维护了。

现在：直接在
https://www.npmjs.com/package/npm
这里所有对应的@types/xxx即可，比如想搜索@types/react可以输入关键字types/react即可

*/
import React from "react"//在安装@types/react之前会报错

/*
  3：第三方库也没有，社区也没有；
  例如：lodash  ，其实现在已经能在https://www.npmjs.com/package/npm中找到@types/loadsh了，这里只是举例，假设没有

  声明模块的步骤：
  1：定义xxx.d.ts类型声明文件，这里是why.d.ts文件
  2：在xxx.d.ts内部:
  declare module "lodash" 只需这一句'import _ from "lodash"'已经不会报错
  //下面的大括号用于导出对应module中你要使用的方法、属性等等，因为这里用到了join()所以我把join导出,对应原位置（不确定是不是这个）：06TS运行到浏览器_webpack\node_modules\lodash\join.js
  {
      export function join(...args: any[]): any
  }
  一般第三名就是，就是这个第三方module的名字，也就是说在'node_modules'下有很多module
  我们就把这个module，这里是lodash声明出来。

  参考：typscript声明模块.md
*/
//此时下面两行都是引用的why.d.ts文件，再有why.d.ts再去真正的访问lodash
import _ from "lodash"//虽然安装了loadsh但是会报错，后来自己进行模块声明才解决
console.log(_.join(["abc", "cba"]))



/*
  自己写的js代码声明举例1
  1：在index.html中的script标签中写一些js代码，有一些属性、函数、构造函数等
  2：在why.d.ts中进行变量声明、函数生命、类的声明
  3：这里再使用就不会报错了
*/
console.log(whyName, whyAge, whyHeight)
console.log(foo("why"))
const p = new Person("kobe", 30)
console.log(p.name, p.age)

/*
  自己写的js代码声明举例2：声明一个.js文件
  1：在任意位置比如utils下新建myyzj.js文件
  2：在myyzj.js文件中把需要导出的东西导出：
  export {yzjName,yzjAge,yzjHeight,yzjfoo,YzjPerson}
  3：创建同名的myyzj.d.ts，声明好后导出也要导出：
  export{yzjName,yzjAge,yzjHeight,yzjfoo,YzjPerson}
  4：在使用处例如这里，再import即可使用

  这是我从网上找到的方法，有没有别的方法
*/
import {yzjName,yzjAge,yzjHeight,yzjfoo,YzjPerson} from "./utils/myyzj"
console.log(yzjName, yzjAge, yzjHeight)
console.log(yzjfoo("why"))
const y = new YzjPerson("kobe==", 30)
console.log(y.name, y.age)


/*
    图片等文件的使用
    1：在指定目录放入图片，这里在src/img/下
    2：在why.d.ts中生命文件类型
    declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
  3：webpack要识别图片可能还需要在webpack.config.js中配置loader
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          type: "asset/resource"
        }
   4：在这里使用
*/ 
import KobeImage from "./img/kobe02.png"
const imgEl = document.createElement("img")
imgEl.src = KobeImage
document.body.append(imgEl)


/*
        引入jquery
        1:在index.html中的script标签中，通过cdn的方式引入jquery
        2:why.d.ts中声明
        declare namespace $ {
  export function ajax(settings: any): any
}
        3：这里使用
*/

$.ajax({
  url: "http://codercba.com:8000/home/multidata",
  success: function(res: any) {
    console.log(res)
  }
})
