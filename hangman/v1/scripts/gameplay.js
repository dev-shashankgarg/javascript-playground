let game

let puzzleArea = document.querySelector('#puzzleDisplayId')
let guessArea = document.querySelector('#guessDisplayId')
let statusArea = document.querySelector('#statusDisplayId')

const renderGame = (game) => {

    let currentStatus = game.status
    puzzleArea.innerHTML =  ''
    game.puzzle.split('').forEach(letter => {
        const elem = document.createElement('span')
        elem.textContent = letter
        puzzleArea.appendChild(elem)
    })
    guessArea.textContent = `Guesses Allowed: ${game.guessAllowed}`
    statusArea.textContent = `Current Game Status: ${currentStatus}`

    if(currentStatus === 'FAILED' || currentStatus === 'FINISHED'){
        alert(game.statusMessage)
    }
    if(currentStatus === 'FAILED'){
        puzzleArea.innerHTML = '' 
        game.word.join('').split('').forEach(letter => {
            const elem = document.createElement('span')
            elem.textContent = letter
            puzzleArea.appendChild(elem)
        })
    }
}

const createGame = () => {
    console.log('starting new game!!')

    puzzleArea.textContent = ''
    guessArea.textContent = ''

    dictionary.asyncWordApi().then((word) => {
        game = new Hangman( word, 5)
        renderGame(game)
    }).catch((err) => {
        console.log(err)
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

