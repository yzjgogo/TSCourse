

/*
把一个函数(此处用一个箭头函数举例，别弄迷糊了)赋值给一个变量，说明此时bar是一个函数类型
*/
// foo本身也是一个标识符, 也应该有自己的类型，这里我们给bar赋值了一个函数
const bar: any = (arg: number): number => {
  return 1231
}
console.log(bar(10))
console.log(typeof bar)//function

//函数类型的顶级类型： (...args: any) => any
//AnyFunction extends (...args: any) => any
type MyFun = (...args: any) => any
const my1:MyFun = function(){}
const my2:MyFun = function(n:number){}
const my3:MyFun = function(n:number){return ""}
function my4<T extends (...args: any) => any>(p:T){
  //anything
}

export {}