//Rest and Spread操作符
//用来声明任意数量的方法参数

//...args相当于一个数组，function中可以传入任意多的参数

function func1(...args){
    args.forEach(item => {
        console.log(item)
    })
}
func1(1,2,3)

//声明函数时候参数固定，但是传参时候传任意数量

function func2(a, b, c){
   console.log(a, b, c)
}

let arg1 = [1,2]
func2(...arg1) //打印1,2,undefined

let arg2 = [1,2,3,4,5]
func2(...arg2) //打印出1,2,3