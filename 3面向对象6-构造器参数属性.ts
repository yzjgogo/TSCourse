class Person {
  // 其实就是语法糖写法
  //当给构造器的参数添加public、protected、private、readonly修饰时，这个参数同时就也是类的属性，这只是语法糖下发
  constructor(public name: string, private _age: number, readonly height: number) {

  }

  //仍然可以给私有属性添加访问器
  set age(newAge) {
    this._age = newAge
  }
  get age() {
    return this._age
  }
  running() {
    console.log(this._age, "eating")
  }
}

const p = new Person("why", 18, 1.88)
console.log(p.name, p.height)//可见是类的属性

// p.height = 1.98

export { }
