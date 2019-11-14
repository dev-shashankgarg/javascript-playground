const Book = function(name,author){
    this.name= name,
    this.author=author
}

Book.prototype.summary = function (){
    return (`Summary: ${this.author} is author for the for the book ${this.name}`)
}

const book1 = new Book('tales of windope' , 'robert ghtyu')
console.log(book1.summary())