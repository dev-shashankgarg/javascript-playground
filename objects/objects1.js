let personInfo = {
    name: 'Shashank Garg',
    age: 24,
    location: 'Banglore'
}

let printMessage = function(person){
    console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)
}

printMessage(personInfo)
personInfo.age += 1
printMessage(personInfo)