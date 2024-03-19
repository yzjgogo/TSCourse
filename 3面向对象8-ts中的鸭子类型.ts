// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型
//总结：鸭子有的所有属性这只鸟都要有，而这只鸟有的属性，鸭子可以没有，这里所说的属性当然也包括函数

//参考：结合看：3面向对象12-严格字面量赋值检测_新鲜的字面量.ts  ，新鲜的字面量严格类型检测 的优先级 高于 鸭子类型

class Person {
  constructor(public name: string, public age: number) {}

  running() {}
}

//Dog有name、age、runing，所以可以把Dog类型赋值给Person类型的变量，虽然Dog有多余的dd和eat属性
class Dog {
  constructor(public name: string, public age: number,public dd:number) {}
  running() {}
  eat(){}
}


/*
  这个方法要求传入Person类型的实力，但隐含其实也可以传入，具有和Person类属性和方法完全一样的鸭子类型
*/
function printPerson(p: Person) {
  console.log(p.name, p.age)
}
printPerson(new Person("why", 18))//没问题
//因为传入的这个对象字面量有和Person一样的name属性、age属性、running方法，因此是Person的鸭子类型，可以传入
// printPerson({name: "kobe", age: 30, cc:90,running: function() {}})这样不行，因为参考'3面向对象12-严格字面量赋值检测_新鲜的字面量.ts'，这个对象字面量是新鲜的，因此所有属性要求一一对应，不多不少，优先级高于鸭子属性
printPerson({name: "kobe", age: 30, running: function() {}})
//同理，这里的Dog也有和Person一样的name属性、age属性、running方法，因此可以传入
printPerson(new Dog("旺财", 3,9))//new Dog("旺财", 3,9)不属于字面量

const person: Person = new Dog("果汁", 5,90)




interface ILength {
  length: number
}

// 1.getLength没有必要用泛型，所有包含length属性的对象(鸭子类型 且 如果是对象字面量且还有其它属性还要求是非新鲜的)都可以传入
function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength("aaaa")//字符串有length属性
const length2 = getLength(["aaa", "bbb", "ccc"])//数组有length属性
const length3 = getLength({ length: 100 })//这个字面量有length属性，虽然是新鲜的，但是没有其他属性，所以这里调用可以
// const length4 = getLength({ length: 100,kk:90 })//新鲜的对象字面量，有多余的kk属性，会报错
let mm = { length: 100,kk:90 }
const length4 = getLength(mm)//虽然有多余的kk属性，但是这个mm不是新鲜的，因此不会报错


export {}
