let game

let puzzleArea = document.querySelector('#puzzleDisplayId')
let guessArea = document.querySelector('#guessDisplayId')
let statusArea = document.querySelector('#statusDisplayId')

const renderGame = (game) => {

    let currentStatus = game.status
    puzzleArea.textContent = game.puzzle
    guessArea.textContent = `Guesses Allowed: ${game.guessAllowed}`
    statusArea.textContent = `Current Game Status: ${currentStatus}`

    if(currentStatus === 'FAILED' || currentStatus === 'FINISHED'){
        alert(game.statusMessage)
    }
    if(currentStatus === 'FAILED'){
        puzzleArea.textContent = game.word.join('')
    }

}

const createGame = () => {
    console.log('starting new game!!')

    puzzleArea.textContent = ''
    guessArea.textContent = ''

    dictionary.getApiWord((error , word) => {
        if(error){
            console.log('Game is under maintainance. Please try again later!')
        }else{
            game = new Hangman( word, 5)
            renderGame(game)
        }
    })
}

newGameBtn.addEventListener('click' , (event) => {
    createGame()
})

window.addEventListener('keypress' , (event) => {
    if(game.status === 'PLAYING'){
        let guess = String.fromCharCode(event.charCode)
        if(guess !== ' '){
            game.makeGuess(guess)
            renderGame(game)
        }
    }
})

createGame()

