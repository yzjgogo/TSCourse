type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return "abc"
}



// 总结类型体操题目: 自定义MyReturnType，其实就是系统自带的ReturnType的源码

//第一步：在“=”的右边让然让T继承自函数，且用条件类型判断，如果T继承自这个函数，就返回这个函数的返回值类型any，否则就返回never
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => any? any: never

//第二步：因为第一步返回的类型是any，并没有确定这个函数返回的具体类型，是没有意义的，此时就用到了infer,我们用infer推断出这个函数T的返回值类型是R，如果真的是R,则MyRetrunType就最终返回R，否则就返回never。具体infer是怎么推断是R的，有我们调用MyReturnType<函数>时，系统来处理，我们不用关心
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R? R: never
//第三步：使用，此时就得到了和系统提供的ReturnType一模一样的MyReturnType，
type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>
// type FooReturnType2 = MyReturnType<boolean>  boolean不是函数，因此报错


//按照上面的逻辑，我们定义一个MyParameterType，获取函数的参数类型，支持多个参数
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any? A: never
//鼠标放到上面，你看到是number和string类型
type CalcParameterType = MyParameterType<CalcFnType>

export {}
