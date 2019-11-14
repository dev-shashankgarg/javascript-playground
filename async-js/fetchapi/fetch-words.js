`use strict`

const getWord = () => fetch('http://puzzle.mead.io/puzzle',{}).then(response => {
    if(response.status === 200){
        return response.json()
    }else{
        throw new Error('un-successfull response code')
    }
}).then(data => data.puzzle)


document.querySelector('#randomWordBtn').addEventListener('click' , event => {
    getWord().then(word => console.log(word)).catch(err => console.log(err))
})