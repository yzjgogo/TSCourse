/**
   ts是js的超集，参考图片：ts是js的超集.png

 0，ts解决了js类型不明确的问题，ts是强类型语言，解决目的是能在编译时发现错误，就不在运行时发现。
    js代码：var a = '',则你可以给a赋值字符串、对象、数字、undefine、NaN、null等等，这样编译期间编译器就无法提示类型错误，只有等到运行时才有可能报类型错误。
    ts代码：let a:string = '',则你只能给a赋值字符串类型，赋值其他类型，编译器立马报红。这就是强类型的有点。 

 1,ts不能单独运行，即浏览器和node等都不认识它，我们需要将ts转为js才能正常使用。

 2，为了能将ts转为js我们需要给电脑搭建编译环境，即用npm安装typescript，命令：npm install typescript -g 。这是全局安装ts的命令，我们可以在cmd、git bash、vscode terminal等任意中断执行此命令安装ts。安装完成后可以用tsc --version命令查看安装的ts版本，我们也可以在安装ts时指定版本，例如npm install typescript@4.8.4 -g。 tsc其实就是指 ts compailer，即ts编译器。以后将ts编译为js也是用tsc命令，例如 tsc aa.ts会得到aa.js
  注意，想要在vscode的terminal中安装ts和使用tsc命令需要以管理员身份运行切搭配几个命令使用，教程参考：vscode的终端的用法.pdf，否则会报错，报错信息参考图片：vscode终端报错.png。

  3，你要安装的ts的版本需要与你电脑安装的node版本相匹配，比如我的node版本是v12.22.11，我执行'npm install typescript -g'因为默认这个命令是安装最新版的ts，我记得当时是5.x.x记不清了，安装完留意看会提示一些版本和node版本不匹配的错误，因此，我执行了'npm install typescript@4.8.4 -g'指定了和codewhy视频里一样的4.8.4版本。如果报错我们可以先执行'npm uninstall -g typescript'卸载掉在重新安装。

  4，如果在使用npm过程中报错：
    npm ERR! code ETIMEDOUT
    npm ERR! errno ETIMEDOUT
    npm ERR! network request to https://xxxxx failed,reason: connect ETIMEDOUT 104.14.56.443
    ...
    npm ERR! newwork If you are behind a proxy,please make sure that the ....

    解决办法：
    npm config set proxy false
    npm cache clean
    可能只需要第一行命令，也可能两行都要执行下。
    参考图片：npm命令报错.jpg

    5，运行ts代码，(浏览器无法识别ts，需要把ts转为js)
    a，原始的繁琐运行方式：
     a1：编写好1_hello_word.ts后，在terminal终端执行'tsc 1_hello_word.ts'会生成1_hello_word.js文件
     a2：在跟以前一样使用1_hello_word.js即可，例如在aaa.html中<script src="./1_hello_word.js"></script>即可执行js。

    b，自动执行ts，我们不执行ts转js这一步，而是交给别的工具做，就好像直接运行ts一样：
     方式一：webpack配置，webpack有对应的loader来识别执行ts代码？这种方式视频没讲，只是给了个配置的文章;
     参考：
     使用webpack搭建直接执行ts的环境.pdf
     https://mp.weixin.qq.com/s/wnL1l-ERjTDykWM76l4Ajw

     方式二：使用ts-node来执行ts代码，本视频重点讲的；
     执行：npm install ts-node -g
     执行：npm install tslib @types/node -g
     此时ts-node已经可以正常使用，如果我们想执行1_hello_word.ts文件，则可以执行命令：
     ts-node 1_hello_word.ts
     另外，其实node本身是支持直接运行js代码的(不需要配合html运行)，例如：node aaa.js。关键字：node直接运行js，node可以直接运行 
     

 * 
*/
/*
   数据类型(类型注解)
*/
var data1 = "data1"//尽量不要用var声明变量，tslint会判错,因为在ts中var仍然没有块级作用域
let data2 = "data2"//声明变量可以用let
const data3 = "data3"//声明常量可以用const
//其中的'string'是数据类型，官方叫法叫类型注解(Type Annotation)，不建议用String,因为'string'是原生类型，没有属性properties的概念，'String'来自es6的String是对象类型，我们可以new String('hello')这样，有属性的概念。如果你定义let msg:String='aaa'，则tslint会判断为错误？
//使用了类型注解，就实现了ts语言的强类型特点，例如这里你只能给message赋值字符串类型，不能赋值其他类型，一旦赋值其它类型则在编译期间就会立刻报错。
let message: string = 'hello work'
message = 'hello chengdu'
// message = 1 会报错，因为message被指定为字符串类型
console.log(message)


/*
   变量的类型推导
   虽然我们没有指定let msg:string = 'msg'，但是根据ts的语言特性，因为我们给msg赋值了字符串'msg'，则ts推导出msg的数据类型为msg:string.
   那么之后我们不可以给msg赋值其它类型的数据
*/
let msg = 'msg'
// msg = 123 //报错，因为msg已经是string类型，现在赋值number类型的123，类型不匹配会报错

/*
   string类型
*/

let str: string = "str"
let a = 1
let str2 = `你好${a}啊`
console.log(str2)

/*
   number类型
*/
let num = 100//let num:number = 100
num = 3
num = 4.12
// num = 'aaa'报错，必须是number类型


/*
   boolean
*/
let flag = true//let flag:boolean = true
flag = false
// flag = 1报错
flag = 3 > 1
// flag = 0报错


/*
   Array数组类型
*/
//指定数组类型方式一：类型[]
const names: string[] = ['a', 'b']
names.push('c')
// names.push(123) 报错，数据类型不匹配
console.log(names)
//指定数组类型方式二：Array<T> 泛型
const names2: Array<string> = ['aa', 'bb']
names2.push('cc')
// names2.push(false)//错误，数据类型不匹配
console.log(names2)


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


/*
   Symbol类型
   参考es6的Symbol，以后补充
*/


/*
   null类型和undefined类型
   关键字'null'和'undefined'既是数据类型又是对应的值，且null类型和undefined类型的变量只能赋值null或undefined
*/
let myN: null = null
// myN = 1 报错
// myN = false 报错

let myUn: undefined = undefined
// myUn = 1 报错
// myUn = false 报错


/*
   函数的参数和返回值类型
   函数如果有参数尽量指定参数类型，否则调用处根本不知道应该具体传什么类型，一旦类型传错，编译期间又不能报错，就会出现隐患。
   返回值类型可以根据需要决定是否可以省略，例如这里，因为返回了123，根据类型推导，greet函数的返回值类型肯定是number,因此可以省略:string
*/
function greet(name: string): number {
   // function greet(name:String){ //省略了返回值类型的定义，因为类型推导就是string
   return 123
}


/*
   此时的匿名函数，item被推导出为string类型,index被推导出为number类型，arr被推导出为string[](Array<string>)类型
*/
let mArr1 = ['a', 'b', 'c']
mArr1.forEach(function (item, index, arr) {
   console.log(item, index, arr)
})
mArr1.forEach(function (item) {
   console.log(item)
})


/*
   函数的参数可以是对象类型
   定义对象类型时，属性之间可以用逗号，也可以用分号，例如{x:number,y:number}，{x:number;y:number}
   对象类型也可以指定某些属性是可选的，例如这里的z，用z?表示可选，访问时如果point.z为true表示有z属性，否则没有。

*/

function printCoordinate(point: { x: number, y: any, z?: number }) {
   if (point.z) {
      console.log(`打印出三维坐标：(${point.x},${point.y},${point.z})`)
   } else {
      console.log(`打印出二维坐标：(${point.x},${point.y})`)
   }
}
printCoordinate({ x: 10, y: 20 })
printCoordinate({ x: 10, y: 20, z: 30 })

/*
   any类型和unknown类型：
   any类型：例如 let a:any
            你可以把a当成任意类型去处理，比如你当成string类型，则你可以a.length；你当成number类型，则你可以a.toFixed(1)；你当成。。。。，且编译器不会再编译阶段报错，只会在运行阶段才能发现类型不匹配的错误。这正是javascript
   unkonwn：例如 let a:unknown
            你不能把a当成某个类型，如果你把a当成string类型，则你使用a.length代码会立刻报红，你把a当成number类型，则你使用a.toFixed(1)代码也会立刻报红。
            但是如果你先确认一下类型再去使用就不会报错，比如：if(typeof a === 'string'){a.length}此时就不会报错，因为你明确认定a的类型是string，编译器认为它就是字符串，既是在运行阶段发现不是字符串而报错，责任也是程序员自己承担，这也就强制要求程序员在写代码时注意类型问题，也解决了javascript弱类型的问题。
   可以说unknown比any高级多了，unknown要求你写代码时就就注意类型问题，而any则让你回到了javascript的弱类型时代。                  
*/

/*
   any类型：使用了any类型相当于回到了javascript弱类型时代，相当于没有typescript，系统不会做类型校验，只有在运行时才能知道类型对不对会不会报错。
   注意注意注意：重要的事情说三遍，使用any类型等价于javascript的弱类型时代，完全一样。你可以对一个any类型进行任何操作，访问任何属性，且编译阶段不会报错，只有运行时才可能报错。
*/
let mama: any = 4
console.log(mama.good)//访问一个不存在的good属性，结果是undefined
// mama.g()//访问mama的不存在的g()方法，编译时期没有报错运行时会报错
mama = {}//可以给any类型的变量赋值任何类型的值


/*
   unkonwn类型：使用某个变量前需要你先确认类型再去使用，否则会报错
*/
let un1: unknown
un1 = 'aaa'
// un1 = 123
// un1.length 爆红，没确认类型
// un1.toFixed(1) 爆红，没确认类型
if (typeof un1 === 'string') {
   console.log(un1.length)//3
}
if (typeof un1 === 'number') {
   console.log(un1.toFixed(1))//123.0
}

/*
   void类型
*/
//函数没有返回值
function sum0(): void {

}
//函数没有返回值或者返回值类型为void时，仍然可以返回undefined
function sum1(): void {
   return undefined
}
//函数返回值类型是undefined
function sum2(): undefined {
   return undefined//此时这一行必须写
}
let res1 = sum1()
console.log(typeof res1)
//当基于上下文的类型推导（Contextual Typing）推导出返回类型为 void 的时候，并不会强制函数一定不能返回内容
//举例1：
function sum3(fun: () => void) {
   let res = fun()
   console.log(res)//
}
sum3(sum4)
function sum4(): number {
   return 12345
}
//举例2：
let letters = ['a','b','c']
//虽然forEach函数要求传入的匿名函数类型是(value: T, index: number, array: T[]) => void，返回值为void，但此时我们仍然返回了123，这是可以的
letters.forEach(function(item,index,arr){
   return 123
})


/*
   联合类型，以后会细讲
*/
let id:string|number|{key:string}
// 赋值string类型后，可以使用string相关的方法等
id = '123'
id.length
//赋值number类型后，可以使用number相关的方法等
id = 456
id.toFixed(1)
//。。。。。。
id = {key:"789"}


export { }