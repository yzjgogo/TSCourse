
/*
   数据类型(类型注解)
*/
var data1 = "data1"//尽量不要用var声明变量，tslint会判错,因为在ts中var仍然没有块级作用域
let data2 = "data2"//声明变量可以用let
const data3 = "data3"//声明常量可以用const
//其中的'string'是数据类型，官方叫法叫类型注解(Type Annotation)，不建议用String,因为'string'是原生类型，没有属性properties的概念，'String'来自es6的String是对象类型，我们可以new String('hello')这样，有属性的概念。如果你定义let msg:String='aaa'，则tslint会判断为错误？
//使用了类型注解，就实现了ts语言的强类型特点，例如这里你只能给message赋值字符串类型，不能赋值其他类型，一旦赋值其它类型则在编译期间就会立刻报错。
let message: string = 'hello work'
message = 'hello chengdu'
// message = 1 会报错，因为message被指定为字符串类型
console.log(message)

export { }