console.log("Initializing notes-app.js")


// add a new element to the dom

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is the paragrah added through javascript'

// document.querySelector('main').appendChild(newParagraph)


//notes metadata

const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercising. Eating better'
    },
    {
        title: 'Office Modification',
        body: 'Get a new seat'
    }
]


const orderedList = document.getElementById('notesList')

const addNoteToList = (note) =>{
 let listElement = document.createElement('li')
 listElement.className = 'note-elem'

 let paragraph = document.createElement('p')

 let boldElem = document.createElement('b')
 boldElem.textContent = `${note.title}`

 let textNode = document.createElement('text')
 textNode.textContent = `: ${note.body}`

 paragraph.appendChild(boldElem)
 paragraph.appendChild(textNode)

 listElement.appendChild(paragraph)
 orderedList.appendChild(listElement)
}

const findAndDisplayNote = (query) =>{

    const sortCondition = document.querySelector('#filterBy').value

    notes.filter(note => {
        return note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase())
    }).sort((a,b) =>{
        if(sortCondition === 'alphabetically'){
            if(a.title.toLowerCase() < b.title.toLowerCase()){return -1}
            else{
                return 1
            }
        }
    }).forEach(note => {
        addNoteToList(note)
    })
}

const hideNotes = () =>{
    document.querySelectorAll('.note-elem').forEach( (elem) => {
        elem.remove()
    })
}

const showNotes = () =>{
    notes.forEach(note => {
        addNoteToList(note)
    })
}

document.querySelector('#createNoteBtn').addEventListener('click' , (e) => {
     console.log(`click button triggered`)
     console.log(e)
})

document.querySelector('#hideNotesButton').addEventListener('click', (e) =>{
    hideNotes()
})

document.querySelector('#showNotes').addEventListener('click', (e) => {
    document.querySelectorAll('.note-elem').forEach( (elem) => {
        elem.remove()
    })
    showNotes()
})

document.querySelector('#queryText').addEventListener('input' ,(e)=>{
        hideNotes()
        findAndDisplayNote(e.target.value)
})

document.querySelector('#nameFormId').addEventListener('submit',(event)=>{
        event.preventDefault()
        console.log(event.target.elements.password.value)
}) 



