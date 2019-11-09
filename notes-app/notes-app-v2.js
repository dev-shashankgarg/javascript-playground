console.log('Notes Application version 2.0 Initialized!!')
let notes = []

intialize()

document.querySelector('#sortDropdown').addEventListener('change' , (event) => {
intialize()
})

document.querySelector('#searchInput').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase()
    if(query !=='') {
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(query)
    })
        renderNotes('searchQueryTable',filteredNotes)
    }else{
        renderNotes('searchQueryTable',[])
    }
})

document.querySelector('#createNoteBtn').addEventListener('click', (event) => {
    event.preventDefault()
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: 'untitled' ,
        description: '' ,
        createdTime: moment().valueOf(),
        lastModifiedTime: moment().valueOf()
    })

    saveNotes(notes)
    intialize()
    location.assign(`/create-note-v2.html#${noteId}`)
})

document.querySelector('#removeAllNotesForm').addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.removeItem('notes')
    intialize()
})

window.addEventListener('storage' , (event) => {

    if(event.key === 'notes'){
        notes = JSON.parse(event.newValue)
        const sortCondition = document.querySelector('#sortDropdown').value
        renderAllNotesWithSorting('allNoteTable' , notes, sortCondition)
    }

})




