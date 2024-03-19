/*

如果一个.ts文件没有export任何东西，那就认为这个文件是一个脚本，而不是一个模块（例如：没有模块化.ts）

既然是一个脚本，那他就是全局的，你在脚本里定义的变量和类型等就是全局可见的，
而定义成模块则只在模块内部可见，想要在外部看到，就得export导入才可以

ts的模块化方案沿用了ES6的模块化方案，即exprot 和 import

*/

import {sum} from "./utils/math"
console.log(sum(20,30))

console.log(myaab,mybbccd())