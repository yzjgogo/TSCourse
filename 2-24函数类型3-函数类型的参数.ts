/*
函数类型的参数
*/
//js中函数类型的参数的用法,参考：2-24数据类型3-函数类型的参数2.js


//ts中函数类型的参数的用法
//定义一个函数类型，这个函数有两个number类型的参数并且返回一个number类型
type CalcType = (num1: number, num2: number) => number

// 1.定义一个函数，这个函数的参数也是函数类型
function calc(calcFn: CalcType) {
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1, num2)
  console.log(res)
}


// 2.函数的调用
function sum(num1: number, num2: number) {
  return num1 + num2
}
calc(sum)//sum作为参数被传递


/*
当函数的参数是函数类型时，ts对于传入的函数类型的参数的参数个数不进行校验，这里虽然定义时接收两个参数的函数，
但是我们传入一个参数的foo是没问题的，甚至传入没有参数的函数也没问题；但是在calc内部，同样需要calcFn(num1,num2)这样完整写参数，只是多余的参数会被忽略。这有点类型数组的forEach循环传入的匿名函数
const names = ["abc", "cba", "nba"]
names.forEach(function() {                不传参可以
names.forEach(function(item) {            传一个参数可以
names.forEach(function(item，index) {     传两个参数可以
names.forEach(function(item，index,arr) { 传三个参数也可以
  console.log(item.length)
})
*/
function foo(num1: number) {
  return num1
}
calc(foo)


// 匿名函数也可以作为参数被传递
calc(function(num1, num2) {
  return num1 - num2
})
export {}