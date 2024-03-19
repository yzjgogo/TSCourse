// 1.字面量类型的基本用法
const name: "why" = "why"//name就是'why'类型,属于string类型的子类型，可以赋值给string类型的变量
let age: 18 = 18//age的类型就是18，属于number的子类型，可以赋值给number类型的变量

// 2.将多个字面量类型联合起来 |
//有点类似枚举，说明Direction只能取这四个值
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"

// 栗子: 封装请求方法
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {
}

//第二个参数你传"post"和'get'都可以，传其它任何字符串都会报错
request("http://codercba.com/api/aaa", 'post')

// TS细节
const info = {
  url: "xxxx",
  method: "post"
}
//method虽然属性值是'post'，但是method是string类型,第二个参数要求是MethodType的字面量类型，因此报错
// request(info.url, info.method)

// 解决方案一: info.method进行类型断言，info.method这个string整好是'post'，因此可以强转
request(info.url, info.method as "post")

// 解决方案二: 直接让info对象类型是一个字面量类型，此时info2的method属性是字面量'post'类型
const info2: { url: string, method: "post" } = {
  url: "xxxx",
  method: "post"
}
request(info2.url, info2.method)//此时info2的method属性是字面量'post'类型，类型匹配不会报错

/**
 
解决方案三：把整个info3强转为子面量，此时鼠标放到info3上看看变量类型变成了:
{
    readonly url: "xxxx";
    readonly method: "post";
}
即info3的url也变成了字面量'xxxx'
info3的method变成了子面量'post'
 */
const info3 = {
  url: "xxxx",
  method: "post"
} as const
//第一个参数接收string类型，虽然此时info3.url是字面量'xxxx'类型，但是是属于string的子类型，因此可以传递
//第二个参数传入的整好是字面量'post'类型，更是没问题
request(info3.url, info3.method)


/*
  我的总结：
  TypeScript中字面量类型，只有number、string、boolean，另外对于{xx:yy}这种对象结构，我们也认为是对象字面量类型。其它如数组、元祖能都不认为有字面量类型的概念。

  知道了对象字面量类型，参考：
  3面向对象8-ts中的鸭子类型.ts
  3面向对象12-严格字面量赋值检测_新鲜的字面量.ts
  就更好理解了
  
*/

export {}

