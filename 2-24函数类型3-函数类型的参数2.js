//因为是弱类型，所以这里func没有指定类型，你传过来一个函数，他就是函数类型
function calc(func){
  const num1 = 10
  const num2 = 20
  const result = func(num1,num2)
  console.log(`执行结果：${result}`)
}

function add(num1,num2){
  return num1+num2
}

//直接把函数名'add'作为参数传过来即可
calc(add)

export {}