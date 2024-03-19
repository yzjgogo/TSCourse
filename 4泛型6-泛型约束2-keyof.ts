/*
  keyof IKun:
  是一种类型，是由IKun所有的属性名(key)，组成的联合类型，
  例如这里的keyof IKun就是 "name"|"age" 这两个string字面量组成的联合类型
*/
interface IKun {
  name: string
  age: number
}
type IKunKeys = keyof IKun // "name"|"age"


/*
  O:要求传入任意一个对象；
  K:要求是O这个对象的某个属性名'key',注意这里的extends是取(keyof O)中某一个值的意思
  这样O[K]就能获取到对应的属性值了
*/
function getObjectProperty<O, K extends keyof O>(obj: O, key: K){
  return obj[key]
}

const info = {
  name: "why",
  age: 18,
  height: 1.88
}
//注意第二个参数只能传入'name' 或 'age' 或 'height'
const name = getObjectProperty(info, "name")

export {}
