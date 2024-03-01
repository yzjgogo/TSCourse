/*
   void类型
*/
//函数没有返回值
function sum0(): void {

}
//函数没有返回值或者返回值类型为void时，仍然可以返回undefined
function sum1(): void {
   return undefined
}
//函数返回值类型是undefined
function sum2(): undefined {
   return undefined//此时这一行必须写
}
let res1 = sum1()
console.log(typeof res1)

//当基于上下文的类型推导（Contextual Typing）推导出返回类型为 void 的时候，并不会强制函数一定不能返回内容
//举例1：
function sum3(fun: () => void) {
  let res = fun()
  console.log(res)//
}
sum3(sum4)
function sum4(): number {
  return 12345
}
//举例2：
let letters = ['a','b','c']
//虽然forEach函数要求传入的匿名函数类型是(value: T, index: number, array: T[]) => void，返回值为void，但此时我们仍然返回了123，这是可以的
letters.forEach(function(item,index,arr){
   return 123
})
export { }