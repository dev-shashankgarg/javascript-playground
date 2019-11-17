class Person {
    constructor(name,age){
        this.name = name
        this.age=age
    }

    getBio(){
        return `${this.name} is ${this.age} years old`
    }
}

const me = new Person('shashank' , 24)
console.log(me.getBio())
