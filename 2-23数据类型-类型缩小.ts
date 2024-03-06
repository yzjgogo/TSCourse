/*
  所谓类型缩小：就是当某个变量的类型不确定或者类型范围很大时(例如a:Any,a:number|string等等)，当我们想对这个变量操作时，我们先把这个变量具体到某个类型再进行操作，这样这个变量就被编译器认为就是某个具体类型，就不会在编译阶段报错。
*/

// 缩小方式1.typeof: 使用的最多
function printID(id: number | string) {
  if (typeof id === "string") {//此时编译器就认为id就是string类型
    console.log(id.length, id.split(" "))
  } else {
    console.log(id)
  }
}


// 缩小方式2.===/!==: 方向的类型判断
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction: Direction) {
  if (direction === "left") {//此时编译器就认为direction是字面量类型'left'
    console.log("左:", "角色向左移动")
  } else if (direction === "right") {
    console.log("右:", "角色向右移动")
  } else if (direction === "up") {
    console.log("上:", "角色向上移动")
  } else if (direction === "down") {
    console.log("下:", "角色向下移动")
  }
}


// 缩小方式3. instanceof: 传入一个日期, 打印日期
function printDate(date: string | Date) {
  if (date instanceof Date) {//此时编译器就认为data是Data类型的实例
    console.log(date.getTime())
  } else {
    console.log(date)
  }

  // if (typeof date === "string") {
  //   console.log(date)
  // } else {
  //   console.log(date.getTime())
  // }
}


// 缩小方式4.in: 判断对象是否有某一个属性或方法
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {//此时编译器认为animal肯定有animal属性
    animal.swim()
  } else if ("run" in animal) {
    animal.run()
  }
}

const fish: ISwim = {
  swim: function() {}
}

const dog: IRun = {
  run: function() {}
}

move(fish)
move(dog)

export {}
