
/*
  在使用映射类型时：
  readonly 等价于 +readonly 即将原来的IPerson的属性映射过来后改为readonly修饰
  -readonly 即将原来的IPerson的属性映射过来后去掉原来的readonly属性，如果原来就没有，那映射过来还是没有

  ? 等价于 +? 即将原来的IPerson的属性映射过来后改为可选属性
  -? 即将原来的IPerson的可选属性映射过来后改为必选，如果原来就必选，那映射过来还是必选
*/
type MapPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property]
}

interface IPerson {
  readonly name: string
  age: number
  height: number
  address?: string
}

//因为映射时用了-readonly和-?因此你把鼠标放到IPersonOptional上发现，所有属性都是必选且非只读的
type IPersonOptional = MapPerson<IPerson>

//因为此时IPersonOptional所有属性都是必选且非只读的，所有要定义出所有的属性
const p: IPersonOptional = {
  name:"dg",
  age:80,
  height:89,
  address:"订个蛋糕"
}

export {}

