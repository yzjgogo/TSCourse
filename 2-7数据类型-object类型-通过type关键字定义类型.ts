/*
   object类型
   我们指定某个变量obj为object类型时，不能读写obj的属性，但是console.log(obj)输出还是可以看到的。
*/
const obj: object = {
  mName: '张三',
  age: '48',
  height: 1.81
}
// obj.mName = '李四' //报错
// console.log(obj.mName) //报错
console.log(obj)

//我们可以这样定义object类型，就很像java的面向对象定义的class，如果某个属性可选，例如address则可以定义成address?,访问时，如果person.address为true则由address属性，否则没有，定义对象类型时各个属性直接如果有换行则可以不用逗号或分割，也可以用逗号或分号分割。以后会细讲。
type Person = {
  name: string
  age: number
  address?: string
}
//person对应的属性要和Person指定的属性一一对应，不多不少
let person: Person = {
  name: '刘能',
  age: 78
}
//通过这种type的方式，就可以访问(读写)对象的属性
person.age = 40
console.log(person, person.name, person.age)
//如下，直接将{}放到数据类型处也可以
let person2: {
  name: string
  age: number
} = {
  name: '王五',
  age: 23
}
export { }