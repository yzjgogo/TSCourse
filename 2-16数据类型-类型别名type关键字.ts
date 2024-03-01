// 类型别名: type

//给number类型起一个别名MyNumber
type MyNumber = number
const age: MyNumber = 18

// 给联合类型 number | string起一个别名叫IDType
type IDType = number | string

function printID(id: IDType) {
  console.log(id)
}

//给对象类型{ x: number, y: number, z?: number }起一个别名叫PointType
// 打印坐标
type PointType = { x: number, y: number, z?: number }
function printCoordinate(point: PointType) {
  console.log(point.x, point.y, point.z)
}

export { }