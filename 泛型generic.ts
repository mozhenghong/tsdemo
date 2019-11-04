class Persons {
    //public names:string 相当于在class中声明了一个names变量
    constructor(public names:string) {
        console.log("ahh")
    }
    eat() {
        console.log("im eating")
    }
}

class Employee extends Persons {
    code: string
    constructor (names: string, code: string){
        super(names)
        this.code = code
    }

    //类的访问控制符，（1）public: 类的内外都可以访问 （2）private: 只有类的内部可以访问 （3）protected: 类的内部和子类可以访问
    private dowork() {
        console.group("im working")
    }
    work() {
        super.eat()
        this.dowork()
    }
}

//泛型 works是一个数组，数组中只能放Persons类型（包括Persons的子类）
var works: Array<Persons> = []
works[0] = new Persons("lll")
works[1] = new Employee("sss","2")