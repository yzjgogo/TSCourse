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

export { }