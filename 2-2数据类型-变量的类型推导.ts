/*
   变量的类型推导
   虽然我们没有指定let msg:string = 'msg'，但是根据ts的语言特性，因为我们给msg赋值了字符串'msg'，则ts推导出msg的数据类型为msg:string.
   那么之后我们不可以给msg赋值其它类型的数据
*/
let msg = 'msg'
// msg = 123 //报错，因为msg已经是string类型，现在赋值number类型的123，类型不匹配会报错
export { }