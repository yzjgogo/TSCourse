/*
TS的命名空间(namespaces)出现在es的模块化标准之前，属于历史遗留的产物，但现在并没有被废弃

命名空间在TypeScript早期时，称之为内部模块，目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题；

es6的模块化，完全可以替代命名空间的作用，因此你以后完全可以不使用命名空间，但是你也可以选择使用，因为它并没有被废弃。
*/

import { price,date } from "./utils/format";
price.format("的观点")
date.format("dddd")
