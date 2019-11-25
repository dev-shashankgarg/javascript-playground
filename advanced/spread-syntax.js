const createTeam = (teamName , coach , ...players) => {
    console.log(`${teamName} is coached by ${coach} and has ${players.length} players`)
    if(players.length){
        let playersString = players.join(',')
        console.log(`players are ${playersString}`)
    }
}


const players = ['mark','stuart','david','michael','ricky']

const playersCopy = [...players] // to copy array

createTeam('INR','bill', ...players) // passing array as spreading them in the function call


// using spread with objects

const person = {
    name: 'Shashank',
    age : 24
}

const location = {
    city : 'bengaluru',
    country: 'India'
}

const overview = {
    ...person,
    ...location
}

console.log(overview)