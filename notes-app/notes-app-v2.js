console.log('Notes Application version 2.0 Initialized!!')
let notes = []

const createTableHeader = (tableId) => {
    const thElem = document.createElement('thead')
    thElem.className = tableId + 'Class'
    const header1 = document.createElement('th')
    header1.textContent = 'Index'
    thElem.appendChild(header1)
    const header2 = document.createElement('th')
    header2.textContent = 'Title'
    thElem.appendChild(header2)
    const header3 = document.createElement('th')
    header3.textContent = 'Description'
    thElem.appendChild(header3)
    return thElem
}

const createTableRow= (tableId , index , note) => {
    const trElem = document.createElement('tr')
    trElem.className = tableId + 'Class'

    const col1 = document.createElement('td')
    col1.textContent = index
    trElem.appendChild(col1)
    const col2 = document.createElement('td')
    col2.textContent = note.title
    trElem.appendChild(col2)
    const col3 = document.createElement('td')
    col3.textContent = note.description
    trElem.appendChild(col3)
    return trElem
}

const renderNotes = (tableId , notes) => {

    document.querySelectorAll(`.${tableId}Class`).forEach(elem => elem.remove())

    if(notes !== null && notes.length > 0){
    document.querySelector(`#${tableId}`).appendChild(createTableHeader(tableId))
    notes.forEach((note , index) => document.querySelector(`#${tableId}`).appendChild(createTableRow(tableId ,index+1 , note)))
    }
}

const renderAllNotesWithSorting = (tableId , notes, sortCondition) => {

    notes.sort((a,b) => {
        if(sortCondition === 'titleSort'){
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }else{
                return 1
            }
        }
    })
    renderNotes(tableId,notes)
}

const intialize = () => {
    const notesJson = localStorage.getItem('notes')
    if(notesJson !== null){
        notes = JSON.parse(notesJson)
    } else{
        notes = []
    }
    const sortCondition = document.querySelector('#sortDropdown').value
    renderAllNotesWithSorting('allNoteTable' , notes, sortCondition)
}

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
        title: event.target.elements.title.value ,
        description: event.target.elements.description.value
    })

    const notesJson = JSON.stringify(notes)
    localStorage.setItem('notes', notesJson)

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

    const notesJson = JSON.stringify(notes)
    localStorage.setItem('notes', notesJson)
    event.target.elements.title.value = ''
    intialize()
})

document.querySelector('#removeAllNotesForm').addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.removeItem('notes')
    intialize()
})




