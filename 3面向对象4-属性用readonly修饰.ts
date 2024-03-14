
class Person{
  readonly name:String
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}
const person = new Person('张三',19)
// person.name = '李四'   //因为name属性已经用readonly修饰，即只读，无法修改，所以这里会报错
person.age = 19
export {}

