//多行字符串,用``可以做到换行
var content = `aaa
abb
bccccbbb`

//自动拆分字符串，根据``中的变量进行拆分
function test (x, y, z){
    // ["hello my name is ", ", i'm ", ""]
    console.log(x) 

    //lkhnjfdn
    console.log(y)

    //18
    console.log(z)
}
var myname = 'lkhnjfdn'
var getAge = function () {
    return 18
}
test`hello my name is ${myname}, i'm ${getAge()}`