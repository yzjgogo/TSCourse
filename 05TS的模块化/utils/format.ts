/*
  命名空间的作用
*/

/*
没有使用命名空间时，你想定义两个同名的方法formatPrice会报错，命名空间可以解决这个问题
*/
// export function formatPrice() {

// }

// export function formatPrice() {
  
// }


/*
  使用命名空间解决上面的问题，下面两个format分别属于不同的命名空间，因此不会报错。
*/
//这个format被定义在price这个命名空间下
export namespace price {
  export function format(price: string) {
    return "¥" + price
  }

  export const name = "price"
}

//这个format被定义在data这个命名空间下
export namespace date {
  export function format(dateString:string) {
    return "2022-10-10"
  }

  const name = "date"
}


/*
使用命名空间时，我们一般不在这里一次性导出，而是在上面那几个export的地方导出，如果你想在这里一次性导出，上面所有出现export的地方都可以去掉export
*/
// export {}
