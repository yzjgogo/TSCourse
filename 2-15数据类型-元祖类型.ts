/*
   元祖数据类型tuple：
   元祖类型有点类似数组，但是需要给每一个元素指定类型
*/
//1，定义元祖类型的变量
const myinfo11:[string,number,boolean] = ['刘德华',63,false]
console.log(myinfo11,myinfo11[0],myinfo11[1],myinfo11[2])

//2，直接用元祖格式变量接收
const [mma,mmb,mmc] = ['郭德纲',45,true]

//3，函数经常返回元祖类型
function dosomething(params:string):[number,(data:number)=>void]{
   // console.log(params)
   function resfun(data:number){
      console.log("需要返回的函数",data)
   }
   return [parseInt(params),resfun]
}
const [mValue,mFunc] = dosomething('10086')
console.log("获取返回的元祖类型:",mValue,mFunc(mValue))


export { }