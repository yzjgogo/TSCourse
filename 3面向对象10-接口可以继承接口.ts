interface IPerson {
  name: string
  age: number
}
/*
接口可以继承接口
*/
interface IKun extends IPerson {
  slogan: string
}

const ikun: IKun = {
  name: "why",
  age: 18,
  slogan: "你干嘛, 哎呦"
}
export {}
