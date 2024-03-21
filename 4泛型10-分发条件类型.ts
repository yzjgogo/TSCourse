//这个类型的目的是，传入一个类型，得的这个类型的数组类型
type toArray<T> = T[]
type NumArray = toArray<number> //NumArray就是number[]
const nArr:NumArray = [1,2]

//如果我们传入联合类型number|string，结果得到的是 (number|string)[],但是我们想得的number[]|string[]这种联合类型，此时就用到了分发条件类型
type Test = toArray<number|string>



/**
 分发条件类型：
 当联合类型遇到条件类型的时候，此时就会变成分发的，即联合类型不再当成一个整体，而是联合类型中的每一个类型都参与条件判断，最终组合成一个新的结果联合类型

 例如这里 number|string 遇到了条件类型 extends any,则先判断number是否继承自any如果是则得到number[],在判断string是否继承自any，如果是则得到string[],
 最终将这个两个结果合并，得到number[]|string[]这个联合类型
 注意这个的判断extends any存催是为了发生条件判断，从而触发系统的类型分发。
*/
type toArray2<T> = T extends any? T[] :never

type NumArray2 = toArray<number>

//鼠标放上去你会看到NumAndStrArray是 number[]|string[] 这种联合类型
type NumAndStrArray = toArray2<number|string>

export {}

