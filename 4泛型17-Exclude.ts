type IKun = "sing" | "dance" | "rap"

/*
  Exclude<UnionType,ExcludedMembersFromUnionType>
  用于构造一个类型，这个够来类型来自联合类型UnionType,但是去掉部分联合成员，具体去掉哪些，由ExcludedMembersFromUnionType指定
  Exclude只针对联合类型？
*/ 
type IKuns = Exclude<IKun, "rap">

// 确实keys一定是可以作为key的联合类型
type HYExclude<T, E> = T extends E? never: T


export {}
