interface IKun {
  name: string
  age: number
  slogan?: string
}


// IKun都变成可选的，鼠标放上去看看
type IKun2 = Required<IKun>

// 类型体操，其实也是Required的源码
type HYRequired<T> = {
  [P in keyof T]-?: T[P] 
}


export {}
