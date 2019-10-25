#!/usr/bin/env ts-node
function createTabs(n:number):string {
    return '----'.repeat(n)
}

class Person {
    //定义children属性，值类型为Person类型数组， 初始值为空数组
    public children: Person[] = []
    constructor(public name){}

    //返回为空（void）
    addchildren(child: Person): void {
        this.children.push(child)
    }

    //可选参数，n可以不传，但是传的话要传number
    introducefamily(n?:number):void{
        n=n||0
        console.log(`${createTabs(n)}${this.name}`)
        this.children.forEach(person => {
            person.introducefamily(n+1)
        })
    }
}
const grandPa = new Person('王一')
const person1 = new Person('王二')
const person2 = new Person('王三')
const child1 = new Person('王四')
const child2 = new Person('王五')
const child3 = new Person('王六')
const child4 = new Person('王七')

grandPa.addchildren(person1)
grandPa.addchildren(person2)
person1.addchildren(child1)
person1.addchildren(child2)
person2.addchildren(child3)
person2.addchildren(child4)

grandPa.introducefamily()



