'use strict'

class Person {

    constructor(firstName , lastName  , age , likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let likeBio =''
        this.likes.forEach((like,index) => {
            if(index === this.likes.length -1){
                likeBio+= (like)
            }else{
                likeBio+= (like+',')
            }
        })
    
        let bio = `${this.fullName} is ${this.age}.`
        if(likeBio !== ''){
            bio+= `\n${this.firstName} likes ${likeBio}`
        }
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


const me = new Person('Shashank' , 'Garg', 24, ['gaming','eating'] )
console.log(`\n\n\n`)
console.log(me.getBio())

me.fullName = 'Mike Phelan'
console.log(`\n\n\n`)
console.log(me.getBio())


class Student extends Person {
    constructor(firstName , lastName  , age , marks , likes = []){
        super(firstName,lastName,age,likes)
        this.marks = marks
    }
    getBio(){
        console.log(super.getBio())
        let bio = `${this.firstName} has scored ${this.marks}`
        this.marks >= 70 ? bio+=`\n${this.firstName} GRADE: PASSED` : bio+=`\n${this.firstName} GRADE: FAILED`
        return bio
    }
    updateMarks(value){
        this.marks += value
        if(this.marks>100){
            this.marks=100
        }else if(this.marks < 0){
            this.marks=0
        }
    }
}

const alex = new Student('alex','wilson',13,72,['gymnasium'])
console.log(`\n\n\n`)
console.log(alex.getBio())
alex.updateMarks(-41)
console.log(`\n\n\n`)
console.log(alex.getBio())
