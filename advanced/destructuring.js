// destructuring is nice way to pass and use object data



const person = {
    name: 'shashank',
    age: 24,
    location: 'bengaluru'
}

const printName = ({name}) => {
    console.log(`Name of person is ${name}`)
}

const printAge = ({age}) => {
    console.log(`Age of person is ${age}`)
}

const printNameAndLocation = ({name,location}) => {
    console.log(`${name} live in  ${location}`)
}


printName(person)
printAge(person)
printNameAndLocation(person)

