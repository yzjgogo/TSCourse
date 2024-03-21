type IKun = "sing" | "dance" | "rap"

/*
  Extract<Type,Union>
  用于构造一个类型，这个类型从Type里取出所有可以赋值给Union？这个以后研究下
*/
type IKuns = Extract<IKun, "rap"|"dance">

// 确实keys一定是可以作为key的联合类型
type HYExtract<T, E> = T extends E? T: never


export {}
