


/*
比如：let abcew:HTMLImageElement
ts中怎么会有js的HTMLImageElement，它被定义在了哪里
甚至是document为什么可以有getElementById的方法呢？
 其实这里就涉及到typescript对类型的管理和查找规则了

xxx.d.ts 就是类型声明文件或者类型定义文件，一般我们只在这个文件里定义类型，而不写业务代码，它仅仅用来做类型检测，告知typescript我们有哪些类型；

那么typescript会在哪里查找我们的类型声明呢？
1，内置类型声明：是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件； 包括比如Function、String、Math、Date等内置类型；
也包括运行环境中的DOM API，比如Window、Document等；
你可以把鼠标放到HTMLImageElement上然后点进去，看它存放在哪里，其实是我们在全局安装ts ‘npm install typescript -g’时，就有了，然后vscode等编译器就能找到，例如你按住Ctrl+鼠标左键进入HTMLImageElement进入会看到它存在于：lib.dom.d.ts里
他们在ts的源码中的位置如下：https://github.com/microsoft/TypeScript/tree/main/src/lib
2，外部定义类型声明；引入的第三方带的声明
3，自己定义类型声明
这三种类型声明参考：06TS运行到浏览器_webpack


比如这里的IDefPerson 和 IDefType 来自于utils/deftype.d.ts里，但是我们并没有导入，这里就可以引用 （我看到老师视频里偶尔没有引用到了，遇到时注意一下，研究下为啥）
*/

let defPerson:IDefPerson= {
  name:"郭德纲",
  age:34
}

let defType:IDefType = 89

console.log(defPerson,defType)

let abcew:HTMLImageElement