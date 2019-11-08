console.log('create note v2.0 Initialized !!')

let notes = fetchNotes()

const noteId = location.hash.substring(1)

const foundNote = findNote(noteId)

if(foundNote === undefined){
    location.assign('/index.html')
}

const titleField = document.querySelector('#titleId')
const descriptionField = document.querySelector('#descriptionId')


console.log(JSON.stringify(foundNote))
titleField.value = foundNote.title
descriptionField.textContent = foundNote.description

titleField.addEventListener('input' , (event) => {
    foundNote.title = event.target.value
    saveNotes(notes)
})

descriptionField.addEventListener('input' , (event) => {
    foundNote.description = event.target.value
    saveNotes(notes)
})

document.querySelector('#removeBtn').addEventListener('click' , (event) => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

document.querySelector('#backBtn').addEventListener('click' , (event) => {
    location.assign('/index.html')
})