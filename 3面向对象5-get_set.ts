class Person {
  // 私有属性: 属性前面会使用_
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  running() {
    console.log("running:", this._name)
  }

  //如果我们把属性名也定义成'name',编译器会报错，和set get的方法名'name'冲突，因此习惯上我们给属性'name'前面加上'_'，即'_name'，其实这只是一种习惯，你完全可以把'_name'改为其它任意字符串，只是在set name和get name方法体内我们会引用这个任意字符串，这样产生的关联。
  // setter/getter: 对属性的访问进行拦截操作
  set name(newValue: string) {
    this._name = newValue
  }

  get name() {
    return this._name
  }


  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue
    }
  }

  get age() {
    return this._age
  }
}

const p = new Person("why", 100)
p.name = "kobe" //内部调用了set name('kobe')
console.log(p.name)  //内部调用了get name()

p.age = -10
console.log(p.age)


export {}
