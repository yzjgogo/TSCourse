class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }
}

/**
 * 
  Student继承Person
 */
class Student extends Person{
  no:number
  constructor(name:string,age:number,no:number){
    super(name,age)//可以用super关键字调用父类的构造器
    this.no = no
  }
  doSomeThing(){
    console.log("看看："+this.age)//可以访问父类的属性
    this.eating()//可以访问父类的方法
  }
}

export {}

