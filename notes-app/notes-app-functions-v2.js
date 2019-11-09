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

const removeNote = (id) => {
    const noteIndex = notes.findIndex( note => note.id === id)
    if(noteIndex > -1){
        notes.splice(noteIndex , 1)
    }
}

const findNote = (id) => {
    return notes.find(note => note.id === id)
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
    const header3_1 = document.createElement('th')
    header3_1.textContent = 'Last Edited'
    thElem.appendChild(header3_1)
    const header4 = document.createElement('th')
    header4.textContent = 'Remove'
    thElem.appendChild(header4)
    return thElem
}

const createTableRow= (tableId , index , note) => {
    const trElem = document.createElement('tr')
    trElem.className = tableId + 'Class'

    const col1 = document.createElement('td')
    col1.textContent = index
    trElem.appendChild(col1)
    const col2 = document.createElement('td')

    const linkage = document.createElement('a')
    linkage.setAttribute('href' , `/create-note-v2.html#${note.id}`)
    linkage.textContent = note.title
    col2.appendChild(linkage)
    trElem.appendChild(col2)
    const col3 = document.createElement('td')
    col3.textContent = note.description
    trElem.appendChild(col3)

    const col3_1 = document.createElement('td')
    col3_1.textContent = moment(note.lastModifiedTime).fromNow()
    trElem.appendChild(col3_1)

    const col4 = document.createElement('td')
    const button = document.createElement('button')
    button.textContent = 'x'

    button.addEventListener('click' , (event) => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(tableId , notes)

    })

    col4.appendChild(button)

    trElem.appendChild(col4)

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
        if(sortCondition === 'createdSort'){
            if(a.createdTime < b.createdTime){
                return -1
            }else{
                return 1
            }
        }
        if(sortCondition === 'lastModifiedSort'){
            if(a.lastModifiedTime > b.lastModifiedTime){
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

const renderLastEdited  = (note) => {
    document.querySelector('#lastEditedText').textContent = moment(note.lastModifiedTime).fromNow()
}