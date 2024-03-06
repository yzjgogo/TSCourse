
/*
至此，定义函数类型有两种方式：
1：函数类型表达式
2：这节要讲的函数的调用签名
*/


// 1.函数类型表达式
type BarType = (num1: number) => number

// 2.函数的调用签名(从对象的角度来看待这个函数, 也可以有其他属性)
//此时IBar也是一个函数类型，与函数类型表达式不同的是，他可以有属性
interface IBar {
  //name和age是函数的属性,当然没有属性也是可以的
  name: string
  age: number
  // 这行有点类似函数类型表达式只是把=>换成了:   这保证了IBar类型的变量可以像函数一样被调用: 这行就是：函数调用签名
  (num1: number): number
}

//bar变量即是函数又有属性name和age
const bar: IBar = (num1: number): number => {
  return 123
}

bar.name = "aaa"
bar.age = 18
bar(123)


// 开发中如何选择:
// 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)


export {}


