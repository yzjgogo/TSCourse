interface IKun {
  name: string
  age: number
  slogan?: string
}

/*
  Omit<Type,Keys>
  用于构造一个类型，这个类型来自Type类型，但是去掉了Type的一些属性，具体去掉哪些属性由Keys指定
  鼠标放上去看看
*/
type IKuns = Omit<IKun, "slogan"|"name">


// 确实keys一定是可以作为key的联合类型
type HYOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never: P]: T[P]
}

export {}
