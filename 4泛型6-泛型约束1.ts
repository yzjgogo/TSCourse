/*
  1：不需要使用泛型约束的情况
*/
interface ILength {
  length: number
}

// 1.getLength没有必要用泛型，所有包含length属性的对象(鸭子类型 且 如果是对象字面量且还有其它属性还要求是非新鲜的)都可以传入
function getLength(arg: ILength) {
  return arg.length
}

const length1 = getLength("aaaa")//字符串有length属性
const length2 = getLength(["aaa", "bbb", "ccc"])//数组有length属性
const length3 = getLength({ length: 100 })//这个字面量有length属性，虽然是新鲜的，但是没有其他属性，所以这里调用可以
// const length4 = getLength({ length: 100,kk:90 })//新鲜的对象字面量，有多余的kk属性，会报错
let mm = { length: 100,kk:90 }
const length4 = getLength(mm)//虽然有多余的kk属性，但是这个mm不是新鲜的，因此不会报错




/*
  使用泛型约束的情况：
  对传入的泛型Type有一个要求：必须继承自ILength，即按照鸭子类型，必须有length属性
*/
function getInfo<Type extends ILength>(args: Type): Type {
  return args
}

const info1 = getInfo("aaaa")
const info2 = getInfo(["aaa", "bbb", "ccc"])
const info3 = getInfo({ length: 100 })
// getInfo(12345) 没有length属性
// getInfo({}) 没有length属性

export {}
