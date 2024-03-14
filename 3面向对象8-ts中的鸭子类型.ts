// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型

//参考：结合看：3面向对象12-严格字面量赋值检测_新鲜的字面量.ts

class Person {
  constructor(public name: string, public age: number) {}

  running() {}
}

class Dog {
  constructor(public name: string, public age: number) {}
  running() {}
}


/*
  这个方法要求传入Person类型的实力，但隐含其实也可以传入，具有和Person类属性和方法完全一样的鸭子类型
*/
function printPerson(p: Person) {
  console.log(p.name, p.age)
}
printPerson(new Person("why", 18))//没问题
//因为传入的这个对象有和Person一样的name属性、age属性、running方法，因此是Person的鸭子类型，可以传入
printPerson({name: "kobe", age: 30, running: function() {}})
//同理，这里的Dog也有和Person一样的name属性、age属性、running方法，因此可以传入
printPerson(new Dog("旺财", 3))

const person: Person = new Dog("果汁", 5)


export {}
