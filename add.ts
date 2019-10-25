#!/usr/bin/env ts-node

import { preProcessFile } from "typescript"

//在gitbash中输入./add.ts 1 2 这里的1 2都是字符串
// const a1 = process.argv[2]
// const a2 = process.argv[3]
//限制a1 a2的类型
const a1:number = parseInt(process.argv[2])
const a2:number = parseInt(process.argv[3])

//要用ES6新语法，就要配置tsconfig.json
if(Number.isNaN(a1)||Number.isNaN(a2)){
    console.log('输入不合法')
    //退出不能用return 要用Process.exit(N),正常退出N为0，非正常退出N为非0
    //1号错误
   process.exit(1)
}
if(a2 === 0){
    console.log('除数不能为0')
    //2号错误
    process.exit(2)
}
console.log(a1 / a2)
process.exit(0)