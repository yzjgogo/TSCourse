/*
  定义一个抽象类用abstract修饰抽象类和抽象方法
  抽象方法没有方法体
  同样，抽象类也不能实例化
*/
abstract class Shape {
  // abstract getArea() 视频中没有报错，我这里报错，提示需要有返回值，因此我改成下面这一行
  abstract getArea():number
}

//矩形继承Shape
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

//圆继承Shape
class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return this.radius ** 2 * Math.PI
  }
}


// 这个方法接收抽象的Shape类型以及Shape的鸭子类型，因此可以传入Rectangle和Circle，甚至可以传入Shape的鸭子类型，只有'getArea()'方法的对象类型
function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(5))
//传入一个鸭子类型
calcArea({ getArea: function():number {
    return 1
}})
// calcArea({ getArea: function():number {
//     return 1
// },dd:function(){} })
export { }