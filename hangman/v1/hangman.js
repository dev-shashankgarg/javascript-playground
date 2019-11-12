class Hangman {

    constructor(word , guessAllowed=5){
        this.word = word.toLowerCase().trim().split('')
        this.guessAllowed = guessAllowed
        this.guesses = []
        this._status = 'PLAYING'
    }

    makeGuess(alphabet) {
        let letter = alphabet.split('')[0]
        if(!this.guesses.includes(letter)){
            if(!this.word.includes(letter)){
                this.guessAllowed-=1
            }
            this.guesses.push(letter)
        }
        return this.puzzle
    }

    get puzzle(){
        let puzzle = ''
        this.word.forEach(alphabet => {
            this.guesses.includes(alphabet) || alphabet === ' ' ? puzzle+=alphabet : puzzle+='*'
        })
        return puzzle
    }

    get status(){
        if(this.guessAllowed <= 0) {this._status = 'FAILED'}
        if(this.word.every(letter => this.guesses.includes(letter) || letter === ' ')) {this._status = 'FINISHED'}
    
        return this._status
    }

    get statusMessage() {
        if(this._status === 'FAILED'){
            return  `Nice Try!! , The word was "${this.word.join('')}"`
        }
        if(this._status === 'FINISHED'){
            return  `Great!! You guessed it :))))`
        }
    }
    
}