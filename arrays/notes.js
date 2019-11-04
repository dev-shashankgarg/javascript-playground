const notes = [{
    name : 'Note 1',
    book : 'Notebook 1'
},
{
    name : 'Note 2',
    book : 'Notebook 2'
},
{
    name : 'Note 3',
    book : 'Notebook 1'
}]

//console.log(notes[notes.length -1])

//exploring array methods

// 1) push : adds new elements to the end of array
// 2) pop : removes element from the end
// 3) shift : removes element from the begining
// 4) unshift : add elements to the begining
// 5) splice : adds,replaces,deletes elements to any position in array

console.log(`Initial notes array: ${JSON.stringify(notes)}`)
notes.push({
    name : 'Note 4',
    book : 'Notebook 1'
},{
    name : 'Note 5',
    book : 'Notebook 2'
})
console.log("Pushed 2 new notes to the end: "+ JSON.stringify(notes))
notes.pop();
console.log("Removed Last Note: "+ JSON.stringify(notes))

notes.shift();
console.log("Removed First Note: "+ JSON.stringify(notes))


notes.unshift({
    name : 'Note 0',
    book : 'Notebook 1'
},{
    name : 'Note 1',
    book : 'Notebook 1'
});
console.log("Added Notes to begining: "+ JSON.stringify(notes))


//splice delete
notes.splice(2,1)
console.log("Deleted Note at position 2 "+ JSON.stringify(notes))
//splice add
notes.splice(2,0, { 
    name : 'Note 2',
    book : 'Notebook 1'
})
console.log("Added Note at position 2 "+ JSON.stringify(notes))

//splice replace
notes.splice(2,1,{
    name : 'Note 2 Replaced',
    book : 'Notebook 2'
})
console.log("Replaced Note at position 2 "+ JSON.stringify(notes))


notes.forEach(function(note , index){
    console.log(`${index+1}. ${JSON.stringify(note)}`)
})

for(let index=0 ; index < notes.length ; index ++){
    console.log(`${index+1}. ${JSON.stringify(notes[index])}`)
}

// using indexOf method of arrays

let numbers = [1,2,3,4,5,6,7,8,9]

console.log(numbers.indexOf(3)) //will return 2
console.log(numbers.indexOf(10)) //will return -1


let findNoteByName = function(notes , name){
    return notes.find(function(note){
        return note.name.toLowerCase() === name.toLowerCase()
    })
}

console.log(JSON.stringify(findNoteByName(notes,'Note 1')));

// learning filtering

const filterNotesByNotebook = function(notes, notebook){
    return notes.filter((note) => {
        return note.book.toLowerCase().includes(notebook.toLowerCase())
    })
}

console.log(JSON.stringify(filterNotesByNotebook(notes,'Notebook 2')));

// learning sorting

console.log('--------')

const SortByNotesNameInReverse = (notes) => {
    return notes.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return 1
        }else if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1
        }else{
            return 0
        }
    })
}

    console.log(JSON.stringify(SortByNotesNameInReverse(notes)))
