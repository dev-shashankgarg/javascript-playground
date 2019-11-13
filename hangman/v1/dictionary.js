const dictionary = {
    words: ['gyroscope' , 'cricket', 'creativity','jupiter','computer','hardisk','trophy','salad','car parts'],
    getWord: function(){
        const numWords = this.words.length
        let randomNum = Math.floor(Math.random()*numWords)
        return this.words[randomNum]
    },
    getApiWord(callback){
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange' , event => {
            if(event.target.readyState === 4 && event.target.status ===200){
                const data = event.target.responseText
                const resp = JSON.parse(data)
                callback(undefined , resp.puzzle)
            }else if(event.target.readyState === 4){
                callback(new Error('could not fetch word :('))
            }
        })
        request.open('GET','http://puzzle.mead.io/puzzle')
        request.send()
    },
    getApiWordSync(){ // not to be used, bad to call in sync mode
        const request = new XMLHttpRequest()
        request.open('GET','http://puzzle.mead.io/puzzle',false)
        request.send()

        if(request.readyState === 4 && request.status ===200){
            const data = request.responseText
            const resp = JSON.parse(data)
            return resp.puzzle
        }else if(request.readyState === 4){
           return new Error('could not fetch word :(')
        }

    }
}