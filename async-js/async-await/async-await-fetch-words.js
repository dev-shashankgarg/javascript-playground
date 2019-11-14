const getWord = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle',{})
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('could not fetch data: network IO issue')
    }
}

document.querySelector('#randomWordBtn').addEventListener('click' , event => {
   getWord().then(data => {
       console.log(data)
   }).catch(err => console.log(err.message))
})