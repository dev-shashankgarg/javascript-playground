console.log('create note v2.0 Initialized !!')

let notes = fetchNotes()

const noteId = location.hash.substring(1)

const foundNote = findNote(noteId)

if(foundNote === undefined){
    location.assign('/index.html')
}

const titleField = document.querySelector('#titleId')
const descriptionField = document.querySelector('#descriptionId')

renderLastEdited(foundNote)
titleField.value = foundNote.title
descriptionField.textContent = foundNote.description

titleField.addEventListener('input' , (event) => {
    foundNote.title = event.target.value
    foundNote.lastModifiedTime = moment().valueOf()
    renderLastEdited(foundNote)
    saveNotes(notes)
})

descriptionField.addEventListener('input' , (event) => {
    foundNote.description = event.target.value
    foundNote.lastModifiedTime = moment().valueOf()
    renderLastEdited(foundNote)
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

window.addEventListener('storage' , (event) => {

    if(event.key === 'notes'){
        notes = JSON.parse(event.newValue)
        const noteId = location.hash.substring(1)

        const foundNote = findNote(noteId)

        if(foundNote === undefined){
            location.assign('/index.html')
        }

        const titleField = document.querySelector('#titleId')
        const descriptionField = document.querySelector('#descriptionId')

        titleField.value = foundNote.title
        descriptionField.textContent = foundNote.description
        renderLastEdited(foundNote)
    }
})

