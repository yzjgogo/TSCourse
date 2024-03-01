
//我们这样给对象类型起别名
type PointType = {
  x: number
  y: number
  z?: number
}

// 接口: interface
// 声明的方式
interface PointType2 {
  x: number
  y: number
  z?: number
}

//用法同给对象类型起别名类似，可以读写该接口类型的对象的属性
let point:PointType2={
  x:100,
  y:200
}
point.x = 101
point.y = 201
console.log("看看接口",point)
function printCoordinate(point: PointType2) {
  
}


export {}

