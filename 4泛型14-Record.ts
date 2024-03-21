interface IKun {
  name: string
  age: number
  slogan?: string
}


/*
  Record<Keys,Type>
  构造一个对象类型，它所有的key(键)都是Keys类型，它所有的value(值)都是Type类型。
  其中Keys是联合类型，其实就是keyof any ,也是number|string|symbol
*/
type t1 = "上海" | "北京" | "洛杉矶"
type IKuns = Record<t1, IKun>

const ikuns: IKuns = {
  "上海": {
    name: "xxx",
    age: 10
  },
  "北京": {
    name: "yyy",
    age: 5
  },
  "洛杉矶": {
    name: "zzz",
    age: 3
  }
}

// 类型体操
// name | age | slogan
type keys = keyof IKun
type Res = keyof any // => number|string|symbol

// 确实keys一定是可以作为key的联合类型
type HYRecord<Keys extends keyof any, T> = {
  [P in Keys]: T
}

export {}
