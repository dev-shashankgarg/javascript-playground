`use strict`

const getWord = () => new Promise((resolve,reject) => { 
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange' , (event) => {
        if(event.target.readyState === 4 && event.target.status === 200){
            resolve(JSON.parse(event.target.responseText).puzzle)
        }else if(event.target.readyState === 4){
            reject(new error('Can\'t fetch a word , error has occured :(('))
        }
    })

    request.open('GET' , 'http://puzzle.mead.io/puzzle')
    request.send()
})

document.querySelector('#randomWordBtn').addEventListener('click' , event => {
    getWord().then((word) => {
        console.log(word)
    }, (err) => {
        console.log('could not fetch the word!')
    })
})










