// 定义接口
interface IPerson {
  name: string
  age: number
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: "why",
  age: 18
}

console.log("我只1")
// 访问属性: 可选链: ?. 不是这篇要讲的重点,friend不是空才去访问name属性，否则不访问，直接undefined
console.log(info.friend?.name)//undefined
console.log("我只2")

// 属性赋值:
// 解决方案一: 类型缩小
// if (info.friend) {
//   info.friend.name = "kobe"
// }

// // 解决方案二: 非空类型断言(有点危险, 只有确保friend一定有值的情况, 才能使用)
//明确告诉编译器friend可定不是空(null或undefined)，编译器不再进行检查，这取决于程序员的判断，责任自己承担，一旦是空，运行时就会报错
info.friend!.name = "james"

export {}
