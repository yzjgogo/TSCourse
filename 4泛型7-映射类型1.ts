/*
引出映射类型:已知已经有了IPerson，我们想再定义出一个CopyPerson要求和IPerson有完全一样的属性(方法)，
因此我们复制IPerson所有的代码，然后粘贴，然后再把名字改成CopyPerson就完成了

这个过程，其实TS提供了更简便的方式：映射类型
*/
interface IPerson {
  name: string
  age: number
}

// 拷贝一份IPerson
interface CopyPerson {
  name: string
  age: number
}



/*
  映射类型：这里映射出IPerson的一个副本，要求具有和IPerson完全一样的属性(方法)
  注意：
  映射类型只能用type定义，不能用interface定义；
  其中的泛型Type就是你要复制的原类型，MapPerson就是映射的结果，和Type有完全相同的属性
  映射类型是基于对象类型索引签名实现的；
  aaa只是一个变量，可以是任意字符串；
  [aaa in keyof Type]其实潜在是一个循环，'in'这个关键字就能看出来，循环取出Type所有的属性名'key'，赋值给aaa，然后Type[aaa]，就取出对应的属性值，这样就完成了复制；

  最终MapPerson就成了IPerson的一个副本，IPerson有的属性，MapPerson都有

*/
type MapPerson<Type> = {
  [aaa in keyof Type]: Type[aaa]

  //潜在的循环结果如下
  // name:Type[name]
  // age:Type[age
}

//最终MapPerson<IPerson>返回的是一个对象类型
type NewPerson = MapPerson<IPerson>


export {}

