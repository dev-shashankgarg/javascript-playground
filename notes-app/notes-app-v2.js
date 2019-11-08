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

document.querySelector('#createNoteForm').addEventListener('submit', (event) => {
    event.preventDefault()
    notes.push({
        id: uuidv4(),
        title: event.target.elements.title.value ,
        description: event.target.elements.description.value
    })

    saveNotes(notes)

    event.target.elements.title.value = ''
    event.target.elements.description.value = ''
    intialize()
})

document.querySelector('#removeNoteForm').addEventListener('submit', (event) => {
    event.preventDefault()

    const noteToRemove = event.target.elements.title.value
    const savedNotesToRemove =  notes.filter(note => note.title === (noteToRemove))

    savedNotesToRemove.forEach(suchNote => {
        notes.forEach((note,index) => {
        if(note.title === suchNote.title){
             notes.splice(index,1)
            }
        })
    })

    saveNotes(notes)
    event.target.elements.title.value = ''
    intialize()
})

document.querySelector('#removeAllNotesForm').addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.removeItem('notes')
    intialize()
})




