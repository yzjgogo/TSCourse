
/*
ts中用于修饰类的属性和方法的三个修饰符

public:默认修饰符，任何地方都可以访问到；
private:只有在自己类的内部可以访问到，子类等外部都访问不到；
protected:自己类内部和子类都可以访问到，其他地方访问不到；
*/

class Person {
  name: string//默认是public
  public age: number//你也可以指定为public

  private high:number=0//只有在当前private类中可以访问它

  protected drink:number=1//子类也可以访问

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating" + this.high)
    this.doGun()//可以访问自己类的私有方法
  }

  //私有方法只有自己类内部可以访问
  private doGun(){

  }

  //子类也可以访问
  protected doDrink(){

  }
}

/**
 * 
 */
class Student extends Person{
  no:number
  constructor(name:string,age:number,no:number){
    super(name,age)
    this.no = no
  }
  doSomeThing(){
    console.log("看看："+this.age)
    this.eating()
  }

  //访问父类protected修饰的属性和方法
  doFather(){
    console.log(this.drink)
    this.doDrink()
  }
}

export {}

