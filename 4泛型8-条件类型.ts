type IDType = number | string

// 判断number是否是extends IDType
// const res = 2 > 3? true: false
type ResType = boolean extends IDType? true: false
type ResType2 = boolean extends IDType ? number : string
// const aa:ResType2 = 123 错误，因为此时ResType2是string类型，因为boolean并没有继承自IDType
const aa:ResType2 = "ddd" //正确，因为aa就是string类型

// 举个栗子: 函数的重载
// function sum(num1: number, num2: number): number
// function sum(num1: string, num2: string): string

// 错误的做法: 类型扩大化，因为你可能传的是sum(1,"a")，就不符合了
// function sum(num1: string|number, num2: string|number): string

//我们可以使用条件类型，把上面的两个重载的函数合并成一个，且能保证参数类型和返回值类型一致
//T extends number | string  说明你传入的两个参数要么都是number类型，要么都是string类型
//返回值使用了条件类型T extends number? number:string  说明如果你传入的参数时number类型，你们返回值就是number类型，如果你传入的参数时string类型，那么返回值就是string类型
function sum<T extends number | string>(num1: T, num2: T): T extends number? number:string
//这个函数是重载的本体
function sum(num1:any, num2:any) {
  return num1 + num2
}

const res = sum(20, 30)
const res2 = sum("abc", "cba")
// const res3 = sum(123, "cba")
console.log("计算结果："+res+","+res2)

export {}

