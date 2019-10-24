//枚举,规定gender只能传 Male,Female两个值
enum Gender {
    Male,
    Female
}

//接口
interface Person {
    gender: Gender;
}
function marry (a:Person, b: Person):[Person, Person]{
    if(a.gender!==b.gender){
        return [a, b]
    }else{
        //抛出错误
        throw new Error('性别相同不能结婚')
    }
}
let a = {
    gender: Gender.Male
}
let b = {
    gender:  Gender.Male
}
let c = {
    gender:  Gender.Female
}
console.log(marry(a,b), marry(a,c))