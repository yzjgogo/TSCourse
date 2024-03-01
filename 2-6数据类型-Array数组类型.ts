/*
   Array数组类型
*/
//指定数组类型方式一：类型[]
const names: string[] = ['a', 'b']
names.push('c')
// names.push(123) 报错，数据类型不匹配
console.log(names)
//指定数组类型方式二：Array<T> 泛型
const names2: Array<string> = ['aa', 'bb']
names2.push('cc')
// names2.push(false)//错误，数据类型不匹配
console.log(names2)
export { }