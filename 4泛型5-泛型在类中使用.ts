class Point<T = number> {
  x: T
  y: T
  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point<number>(10, 20)
console.log(p1.x)
const p2 = new Point("123", "321")
console.log(p2.x)

export {}
