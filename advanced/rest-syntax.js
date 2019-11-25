const createTeam = (teamName , coach , ...players) => {
console.log(`${teamName} is coached by ${coach} and has ${players.length} players`)
if(players.length){
    let playersString = players.join(',')
    console.log(`players are ${playersString}`)
}
}

createTeam('INR','bill','1','2','3')
createTeam('INR','bill')