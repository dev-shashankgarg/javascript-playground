const dictionary = {
    words: ['gyroscope' , 'cricket', 'creativity','jupiter','computer','hardisk','trophy','salad','car parts'],
    getWord: function(){
        const numWords = this.words.length
        let randomNum = Math.floor(Math.random()*numWords)
        return this.words[randomNum]
    }
}