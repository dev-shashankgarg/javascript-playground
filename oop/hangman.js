const Game = function(word , guessAllowed=5) {
    this.word = word.toLowerCase().trim().split('')
    this.guessAllowed = guessAllowed
    this.guesses = []
}

Game.prototype.getPuzzle = function (){
    let puzzle = ''
    this.word.forEach(alphabet => {
        this.guesses.find(alpha => alpha === alphabet) ? puzzle+=alphabet : puzzle+='*'
    })
    return puzzle
}

Game.prototype.makeGuess = function (alphabet) {
    this.guesses.push(alphabet.split('')[0])
}


const game1 = new Game('claustrophobia' , 7)
game1.makeGuess('c')
game1.makeGuess('us')
console.log(game1.getPuzzle())
console.log(game1)

const game2 = new Game('gyroscope')
game2.makeGuess('o')
console.log(game2.getPuzzle())
