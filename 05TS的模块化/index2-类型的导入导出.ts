/*
  为什么在导入类型时，强烈建议使用type关键字，因为javascript是没有类型概念的，ts最终被转化为js后这些导入的类型要被擦除，如果不适用type关键字，则编译器需要进入./utils/type内部看你导出的是不是类型，这样效率很低，而你使用了type关键字声明，则编译器直接在此处判断擦除即可。因此效率高；

  老师的pdf的原话：这些可以让一个非 TypeScript 编译器比如 Babel、swc 或者 esbuild 知道什么样的导入可以被安全移除。
  Babel不仅可以让es6转为es5，还可以让ts转为js
*/

//类型的导入方式1：不使用type关键字，效率差
// import { IPerson,IDType } from "./utils/type";

//类型的导入方式2：给每一个类型都使用type关键字，效率高
// import {type IPerson,type IDType } from "./utils/type";

//类型的导入方式3：统一给所有类型使用type关键字，效率一样高
import type {IPerson,IDType } from "./utils/type";

const person:IPerson = {
  name:"刘德华",
  age:89
}

const id:IDType = 74