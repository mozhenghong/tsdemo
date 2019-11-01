//generator函数：控制函数的执行过程，手工暂停和恢复代码执行
//babel编辑器


//function后面加*就代表声明了generator函数
function* dosomething(){
    console.log("start")
    //yile代表断点
    yield
    console.log("finish")
}

//必须把generator函数赋给一个变量才能执行
let funct = dosomething()

funct.next() //打印出“start”

funct.next() //打印出“finish”




