// 对比联合类型，‘或’的关系
type ID = number | string
const id1: ID = "abc"
const id2: ID = 123

// 交叉类型: 两种(多种)类型要同时满足
type NewType = number & string // 没有意义，此时NewType实际上是never类型

interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

//InfoType被定义成即是IKun类型又是ICoder类型
type InfoType = IKun & ICoder

//其中的name和age保证是IKun类型，name和coding保证是ICoder类型
const info: InfoType = {
  name: "why",
  age: 18,
  coding: function() {
    console.log("coding")
  }
}

//交叉类型常常用来为对象类型添加新属性。
type A = { foo: number };
//因为业务需要我发现A的属性不够用了，此时想到用交叉类型给A扩展一个bar属性(与对象{bar:number})交叉，成为交叉类型B
type B = A & { bar: number };
export {}