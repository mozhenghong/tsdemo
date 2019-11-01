let mynames:string = "llll"

//alias可以是任何类型
let alias: any ="xxx"
alias = 13

let age:number = 13

let man:boolean = true

//void时，函数可以不返回任何东西
function tests(name:string):void{

}

//自定义类型，自己定义一个persons类型
class persons{
    firstname:string;
    fistage: number
}
//声明一个zhang变量，类型为persons类型
let zhang :persons = new persons()
zhang.firstname = "djsf"
zhang.fistage = 78

//默认参数
//默认参数必须从后面往前面声明，因为传参是从第一个开始传 
function trwt (a:string,b:string,c:string="ldlk"){
    console.log(a)
    console.log(b)
    console.log(c)
}
trwt('x','v')

//可选参数,在声明类型：前面加？,b为可选参数
//必填参数不能放到可选参数后面！!,不能a可选，b必选
function trwts (a:string, b?:string, c:string="ldlk"){
    console.log(a)
    console.log(b)
    console.log(c)
}
trwts('x','v')
