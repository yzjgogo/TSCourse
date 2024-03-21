interface IKun {
  name: string
  age: number
  slogan?: string
}


// IKun都变成可选的，鼠标放上去看看
type IKun2 = Readonly<IKun>

// 类型体操
type HYReadonly<T> = {
  readonly [P in keyof T]: T[P] 
}

export {}
