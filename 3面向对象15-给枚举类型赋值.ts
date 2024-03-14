// 定义枚举类型
// enum Direction {
//   LEFT = 0,
//   RIGHT = 1
// }

// enum Direction {
//   LEFT = 100,
//   RIGHT
// }

/*
其实即使你没有给枚举类型赋值，系统椰子冻赋值了，且从0开始依次赋值
例如这里APPLE被赋值1，BANANA被赋值2，你把鼠标放到APPLE和BANANA上就能看到
*/
enum Fruie{
  APPLE,
  BANANA
}

/*
  另外，如果你给第一个枚举赋值number了，第二个枚举也会自动加1赋值，
  例如这里你给DOG赋值125，系统自动给CAT赋值126，
  如果你给CAT赋值，没给DOG赋值，则系统自动给DOG赋值0，而不是减1
*/
enum Animal{
  DOG=125,
  CAT
}

/*
  上面讲到的自动赋值，仅限于number类型的情况，这里如果你个一个变量赋值string类型，另一个变量也必须手动赋值，否则报错
*/
enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT"//必须也赋值，否则草错
}

const d1: Direction = Direction.LEFT

export {}
