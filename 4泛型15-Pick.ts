interface IKun {
  name: string
  age: number
  slogan?: string
}

/*
  Pick<Type,Keys>
  用于构造一个新类型，这个新类型，由Type里面的部分属性组成，具体哪些属性，由Keys指定

  鼠标放到IKuns上面看看新类型
*/
type IKuns = Pick<IKun, "slogan"|"name">

// 确实keys一定是可以作为key的联合类型
type HYPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


export {}
