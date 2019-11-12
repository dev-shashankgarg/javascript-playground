class Game {
    constructor(word , guessAllowed=5){
        this.word = word.toLowerCase().trim().split('')
        this.guessAllowed = guessAllowed
        this.guesses = []
    }
    getPuzzle = function (){
        let puzzle = ''
        this.word.forEach(alphabet => {
            this.guesses.find(alpha => alpha === alphabet) ? puzzle+=alphabet : puzzle+='*'
        })
        return puzzle
    }
    makeGuess = function (alphabet) {
        this.guesses.push(alphabet.split('')[0])
    }
}
