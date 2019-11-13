`use strict`

const getWord = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange' , (event) => {
        if(event.target.readyState === 4 && event.target.status === 200){
            callback(undefined , JSON.parse(event.target.responseText).puzzle)
        }else if(event.target.readyState === 4){
            callback(new error('Can\'t fetch a word , error has occured :(('))
        }
    })

    request.open('GET' , 'http://puzzle.mead.io/puzzle')
    request.send()
}

document.querySelector('#randomWordBtn').addEventListener('click' , event => {
    getWord((error , word) => {
        if(error){
            console.log('could not fetch the word!')
        }else{
            console.log(word)
        }
    })
})










