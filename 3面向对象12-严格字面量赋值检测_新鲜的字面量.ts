interface IPerson {
  name: string
  age: number
}

//参考，结合看：3面向对象8-ts中的鸭子类型.ts

// 奇怪的现象1：，解释来自视频老师找到的TypeScript的github上的issue里ts参与开发者给的回答

//这样会报错，当前这个{name:'郭德纲',age:14,height:54}对象字面量是第一次使用，是新鲜的，因此编译器要求其所有属性(包括方法名也是属性)要和IPerson一一对应，因此这里多个个height会报错
// const info1:IPerson = {name:'郭德纲',age:14,height:54}

//下面这样，我们先定义一个变量obj接收多了height属性的对象字面量，然后再把obj赋值给IPerson类型的info，发现这样就不会报错了，因此编译器认为此时ob不是第一次使用，不是新鲜的
//
const obj = {
  name: "why",
  age: 18,
  // 也多了一个height属性
  height: 1.88
}
const info: IPerson = obj


//同理传入方法也是一样的道理
function printPerson(person: IPerson) {

}
// 这样会报错
// printPerson({ name: "kobe", age: 30, height: 1.98 })
//下面这样就不会报错
const kobe = { name: "kobe", age: 30, height: 1.98 }
printPerson(kobe)



export {}
