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
  //下面的大括号用于导出对应module中你要使用的方法、属性等等，因为这里用到了join()所以我把join导出,对应原位置：06TS运行到浏览器_webpack\node_modules\lodash\join.js
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




