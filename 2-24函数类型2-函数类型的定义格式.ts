/*
定义一个函数类型:格式：(参数名1:参数类型;参数名2:参数类型....)=>返回值类型
*/
type FunType = (num:number) => number//此时FunType被定义成了只有一个number类型的参数且返回number类型的函数类型

//a:赋值箭头函数
const myFunc:FunType = (arg:number):number=>{
  return arg+2
}
console.log(`执行函数myFunc:${myFunc(3)}`)//3+2=5

//b:赋值匿名函数
const myFunc2:FunType = function(arg:number):number{
  return arg+3
}
console.log(`执行函数myFunc2:${myFunc2(3)}`)//3+3=6

export {}