const fetchNotes = () => {
    const notesJson = localStorage.getItem('notes')
    let notes = []
    if(notesJson !== null){
        notes = JSON.parse(notesJson)
    } 
    
    return notes
}

const saveNotes = (notes)=> {
    const notesJson = JSON.stringify(notes)
    localStorage.setItem('notes', notesJson)
}


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
    notes = fetchNotes()
    const sortCondition = document.querySelector('#sortDropdown').value
    renderAllNotesWithSorting('allNoteTable' , notes, sortCondition)
}