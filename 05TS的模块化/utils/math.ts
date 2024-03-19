/*

如果一个.ts文件没有export任何东西，那就认为这个文件是一个脚本，而不是一个模块

既然是一个脚本，那他就是全局的，你在脚本里定义的变量和类型等就是全局可见的，
而定义成模块则只在模块内部可见，想要在外部看到，就得export导入才可以

ts的模块化方案沿用了ES6的模块化方案，即exprot 和 import

如果某个ts文件我们没必要导出任何东西，又希望他是一个模块，那么就export {}即可

*/
export function sum(num1: number, num2: number): number {
  return num1 + num2
}


