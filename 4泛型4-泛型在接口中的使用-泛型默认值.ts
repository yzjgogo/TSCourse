interface IKun<Type> {
  name: Type
  age: number
  slogan: Type
}


const kunkun: IKun<string> = {
  name: "why",
  age: 18,
  slogan: "哈哈哈"
}

const ikun2: IKun<number> = {
  name: 123,
  age: 20,
  slogan: 666
}


/*
如果需要我们可以在泛型定义处给泛型指定默认类型，这样调用处就可以不用指定泛型类型，而传入默认类型即可
*/
interface IPerson<T=string> {
  name: T
  age: number
  slogan: T
}
const person: IPerson = {
  name: "",
  age: 30,
  slogan: "坤坤加油!"
}
export {}
