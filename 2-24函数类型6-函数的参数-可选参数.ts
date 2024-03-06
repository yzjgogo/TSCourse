
/*
  函数的可选参数格式： param?:type
  既然是可选说明调用这个函数时，这个参数可以不传，如果不传，此时这个参数param是undefined类型，值也是undefined,即此时param应该属于联合类型(type | undefined)

  更多可选参数内容参考：函数的可选参数.md
*/
//y的数据类型是(number | undefined)
function foo(x: number, y?: number) {
  console.log(`y的类型:${y},${typeof y}`)
  if (y !== undefined) {
    console.log(y + 10)
  }
}

foo(10)
foo(10, 20)

export {}

