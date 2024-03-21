type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return "abc"
}
/**
  RetrunType系统提供的内置工具，接收的泛型是：ReturnType<T extends (...args: any) => any>
  即接收一个函数类型：(...args: any) => any

  把鼠标放到CalcReturnType，会看到是number类型
  把鼠标放到FooReturnType，会看到是string类型
 * 
*/
type CalcReturnType = ReturnType<CalcFnType>
type FooReturnType = ReturnType<typeof foo>
const value1:CalcReturnType = 123   //CalcReturnType是number类型
const value2:FooReturnType = "123"  //CalcReturnType是string类型
export {}
