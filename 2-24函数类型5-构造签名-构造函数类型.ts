/*
 参考：构造签名.md
 结合这个md文档 与 2-24函数类型4-函数的调用签名.ts一起看

前面讲过函数类型，有一种函数很特殊叫构造函数，那构造函数类型是什么样的呢：
new (参数1：参数1类型,参数2：参数2类型....) => 返回值类型  ,只是比普通函数的类型定义多个个new
例如：
type AA = new (n:string)=>Person
这个AA就是构造函数类型，等价于(注意=>变成了:，即改成了构造函数的调用签名，参考：2-24函数类型4-函数的调用签名.ts)：
interface AA{
  new (n:string):Person
}

 对于一个类Person，类名Person也是这个类的构造签名函数
*/

type AA = new (n:string)=>Person
// 下面是等价写法
// interface AA{
//   new (n:string):Person
// }
class Person{
  name:string
  constructor(name:string){
    this.name = name
  }
  // constructor(){}
}

function doA(a:AA,n:string){
  const my = new a(n)
  console.log("结果1")
  console.log(my)
  console.log(my.name)
  console.log("结果2")
}
doA(Person,'刘德华')
// doA(Dog,'都来那个')

//对于一个类Person，类名Person也是这个类的构造签名函数
let mma:AA = Person
new mma("张学友")
export {}