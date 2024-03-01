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
export { }