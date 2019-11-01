//destructuring析构表达式: 通过表达式将对象或数组拆解成任意数量的变量

//对象
function getStock() {
    return{
        code: "idbn",
        price1:34,
        price:{
            price2: 46,
            price3: 756,
        }
    }
}
//将peice1赋给变量hijn
var {code, price1:hijn, price:{price2}} = getStock()
console.log(code, hijn, price2)

//数组
let arr1 = [1,2,3,4,6]
let [n1, ,n3,...others] = arr1
console.log(n1) //1
console.log(n3) //3
console.log(others) //[4,5]
