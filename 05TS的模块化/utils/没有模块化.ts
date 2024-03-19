
/*
这个文件没有模块化,没有任何export的导出，因此是一个脚本，是一个全局课件的文件，因此其里面的所有属性都是全局可见，则任意位置都可以直接引用，例如
在index1-模块化和非模块化.ts就直接引用了
*/

let myaab:number = 0

function mybbccd(){
  console.log("执行mybbccd")
}

