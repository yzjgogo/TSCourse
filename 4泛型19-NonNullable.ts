type IKun = "sing" | "dance" | "rap" | null | undefined

// 如果联合类型IKun里有null,undefined，则去掉，后作为新的类型返回
type IKuns = NonNullable<IKun>

// 确实keys一定是可以作为key的联合类型
type HYNonNullable<T> = T extends null|undefined ? never: T

export {}
