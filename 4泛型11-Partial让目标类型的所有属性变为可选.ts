interface IKun {
  name: string
  age: number
  slogan?: string
}

// IKun都变成可选的，鼠标放上去看看，可知都变成可选了
type IKunOptional = Partial<IKun>

// 类型体操，其实也是Partial的源码
type HYPartial<T> = {
  [P in keyof T]?: T[P] 
}


export {}
