//建立代码约定
 interface Iperson {
     name: string,
     age: number
 }
 class Personone {
     constructor(public config:Iperson) {

     }
 }
 //传参时，必须严格按照接口约定传参,不能多传也不能少传（必须传name，age参数），传参类型要对
 let xm = new Personone({
     name: "xiaomimg",
     age: 18
 })

 //implements，类实现一个方法

 interface Animal {
     eat()
 }
//Tiger类中必须有Animal接口中的方法
 class Tiger implements Animal{
    eat() {
        console.log("llll")
    }
 }
  