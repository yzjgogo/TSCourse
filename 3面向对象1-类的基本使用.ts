class Person {
  // 成员属性: 声明成员属性,必须声明
  name: string//name='' 也可以给默认值
  age: number//age!: number当你遇到啥时候你没初始化属性，编译器要求你初始化时，你可以给加个感叹号，告诉编译器不需要初始化，这个知识点用到以后再研究

  //构造器
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 类的方法
  eating() {
    console.log(this.name + " eating")
  }

  running() {
    console.log(this.name + " running")
  }
}

// 实例对象: instance
const p1 = new Person("why", 18)
const p2 = new Person("kobe", 30)

console.log(p1.name, p2.age)

export {}

