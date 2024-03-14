function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }
  //返回元祖类型
  return [state, setState]
}

// 初始化count
const [count, setCount] = useState<number>(100) //也可以省略指定泛型useState(100)
const [message, setMessage] = useState<string>("Hello World") //也可以省略指定泛型useState("Hello World")
const [banners, setBanners] = useState<any[]>([])

export {}
