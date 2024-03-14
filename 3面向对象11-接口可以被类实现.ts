interface IKun {
  name: string
  age: number
  slogan: string

  playBasketball: () => void
}

interface IRun {
  running: () => void
}


const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "你干嘛!",
  playBasketball: function() {}
}

/*
  类可以实现一个或多个接口
*/
class Person implements IKun, IRun {
  name: string
  age: number
  slogan: string
  constructor(name:string,age:number,slogan:string){
    this.name = name
    this.age = age
    this.slogan = slogan
  }

  playBasketball() {
    
  }

  running() {

  }
}

const ikun2 = new Person('刘德华',34,'dgg')
ikun2.playBasketball()


export {}
