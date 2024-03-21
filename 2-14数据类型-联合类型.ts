/*
   联合类型
*/
let id:string|number|{key:string}
// 赋值string类型后，可以使用string相关的方法等
id = '123'
id.length
console.log("id的数据类型1：",(typeof id))//string 此时id已经是string类型
//赋值number类型后，可以使用number相关的方法等
id = 456
id.toFixed(1)
console.log("id的数据类型2：",(typeof id))//number 此时id已经是number类型
//。。。。
id = {key:"789"}
console.log("id的数据类型3：",(typeof id))//object 此时id已经是object类型

//使用类型缩小处理联合类型
function handleLianhe(params: string|number|boolean){
   if(typeof params === 'string'){

   }else if(typeof params === 'number'){

   }else if(typeof params === 'boolean'){

   }else{
      //params是never类型
   }
}


/**
 
   keyof any
   鼠标放到TopUnion上，可见其就是  string | number | symbol 这个联合类型

   
*/

type TopUnion = keyof any

export { }