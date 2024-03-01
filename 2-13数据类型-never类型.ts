/*
   never类型：不可能有这样的值的类型，就是never类型，如果某个变量定义为never类型，例如：let a:never,那么就不可能有任何值赋值给a。说明不可能有某个值x可以赋值给a
   参考：https://wangdoc.com/typescript/any#never-%E7%B1%BB%E5%9E%8B

   never类型是其它任何类型的子类型，因此其它任何类型都包含了never类型，never类型是任何其他类型所共有的。因此我们可以把never类型的变量赋值给其它任意类型的变量。
*/
let mynev:never
// mynev = 3 没有哪个值能赋值给never，因此报错

//never类型可以赋值给其它任意类型
// function f1724():never{//这个方法永远不会返回任何值，因此相当于返回了never类型的值，即没有值可返回。
//    throw new Error('my error')
// }注释掉是因为throw会报错，没法继续往下走，以后回忆的时候可以打开
// let a1724:number = f1724()
// let b1724:string = f1724()
// let c1724:boolean = f1724()

//比如你写某个方法，handleMessage(message: string | number){}，为了防止你离职后，别人修改这个方法新增了类型boolean，你可以在default里定义变量check:never，这样如果他只新增boolean类型而不在case "boolean"中处理这种情况，则编译阶段参数变成message: string | number | boolean后就会立刻报红
function handleMessage(message: string | number | boolean) {
   switch (typeof message) {
     case "string":
       console.log(message.length)
       break
     case "number":
       console.log(message)
       break
       //如果注释掉这个case "boolean"下面的check就会报红，因为你会把一个boolean类型的message赋值给never类型的check，这是不对的，因为never类型不能接收任何值
     case "boolean":
       console.log(Number(message))
       break
     default:
       const check: never = message
   }
 }
 handleMessage("aaaa")
 handleMessage(1234)
 // 另外同事调用这个函数
 handleMessage(true)

 //联合类型需要注意的never案例
 let lianhe: string|number
 lianhe = "abc"//此时已经确定了linahe是string
 if(typeof lianhe === 'number'){
      //因为lianhe已经是string类型，所以在这个if语句里没有任何值能赋值给lianhe，因此编译器就报错
      // lianhe.toFixed(1)
 }

 export { }