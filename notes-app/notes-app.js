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


notes.forEach(note => {
    addNoteToList(note)
})

