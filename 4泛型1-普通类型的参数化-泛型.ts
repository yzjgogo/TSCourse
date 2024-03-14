/*
1，没有使用泛型，普通类型，类型被固定住了，不灵活
*/
function bar1(arg:number):number{
  return arg
}
bar1(100)
// bar1("dd") //报错，因为bar1只能接收number类型的参数


/*
2,让原本固定的类型参数化，由调用处决定是什么类型 -> 即 泛型
*/
function bar2<T>(arg:T):T{
  return arg
}
//调用处指定类型
const res1 = bar2<number>(123)
const res2 = bar2<string>("abc")
const res3 = bar2<{name: string}>({ name: "why" })
//有时如果系统能够自动正确的推导出类型，你也可以省略制定类型
const res4 = bar2("aaaaaaaaa") //推导出T是string类型
const res5 = bar2(11111111) //推导出T是number类型
//另外补充下，我们用const 接收的res4,res5,则你把鼠标放到res4，res5上，你会发现系统推导出的是具体的'aaaaaaaaa'和11111111这俩字面量类型，如果你用let接收res4,res5，则推导出的是string类型和number类型

export {}