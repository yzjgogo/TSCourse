/*
参考：函数的重载.md
*/



// 需求: 只能将两个数字/两个字符串进行相加
// 案例分析: any实现
// function add(arg1, arg2) {
//   return arg1 + arg2
// }

// add(10, 20)
// add("abc", "cba")
// add({aaa: "aaa"}, 123) //可见使用any不满足需求


// 1.实现两个函数
// function add1(num1: number, num2: number) {
//   return num1 + num2
// }

// function add2(str1: string, str2: string) {
//   return str1 + str2
// }

//课件这两个函数没有任何关联
// add1(10, 20)
// add2("abc", "cba")



// 2.错误的做法: 联合类型是不可以，因为虽然可能number+number,string+string，但是也有可能number+string，因此不可控
// function add(arg1: number|string, arg2: number|string) {
//   return arg1 + arg2
// }


// 3.TypeScript中函数的重载写法
// 3.1.先编写重载签名，限制了add这个函数只能按照这两个重载的函数定义的参数调用调用，否则报错
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 3.2.编写通用的函数实现，实际调用的并不是这个函数，而是上面的某一个
function add(arg1: any, arg2: any): any {
  return arg1 + arg2
}

add(10, 20)
add("aaa", "bbb")
// 通用函数不能被调用
// add({name: "why"}, "aaa")
// add("aaa", 111)

export {}
