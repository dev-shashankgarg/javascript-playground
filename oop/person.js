'use strict'

const Person = function (firstName , lastName  , age , likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let likeBio =''
    this.likes.forEach((like,index) => {
        if(index === this.likes.length -1){
            likeBio+= (like)
        }else{
            likeBio+= (like+',')
        }
    })

    let bio = `${this.firstName} ${this.lastName} is ${this.age}.`
    if(likeBio !== ''){
        bio+= `\n${this.firstName} likes ${likeBio}`
    }
    return bio
}

Person.prototype.setName = function (fullName) {
const names = fullName.split(' ')
this.firstName = names[0]
this.lastName = names[1]
}



const me = new Person('Shashank' , 'Garg', 24, ['gaming','eating'] )
console.log(me.getBio())

me.setName('Mike Phelan')
console.log(me.getBio())