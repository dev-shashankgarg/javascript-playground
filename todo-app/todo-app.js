console.log('TODO application initialized!')

// remove all the <p> tags which contains text with 'the' string

// const ps = document.querySelectorAll('p')
// ps.forEach(p => {
//     const pText = p.textContent
//     if(pText.toLowerCase().includes('the')){
//         p.remove()
//     }
// })

//todo metadata

const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]

const completedTodoListElem = document.getElementById('completeTodoListId')
const incompletedTodoListElem =  document.getElementById('incompleteTodoListId')
const completedTodoParagraphElem =  document.getElementById('todoCompleteSummaryParagraphId')
const incompletedTodoParagraphElem =  document.getElementById('todoIncompleteSummaryParagraphId')

const completedTodos = todos.filter(todo => todo.completed)
const incompletedTodos = todos.filter(todo => !todo.completed)

if(incompletedTodos.length > 0){
    incompletedTodoParagraphElem.textContent = `You have ${incompletedTodos.length} TODO's to complete !!`
}

if(completedTodos.length > 0){
    completedTodoParagraphElem.textContent = `You have  completed ${completedTodos.length} TODO's`
}

todos.forEach(todo =>{
    let listElement = document.createElement('li')
    let paragraph = document.createElement('p')
   
    let textNode = document.createElement('b')
    textNode.textContent = `${todo.text}`

    paragraph.appendChild(textNode)
   
    listElement.appendChild(paragraph)

    if(todo.completed){
        completedTodoListElem.appendChild(listElement)
    }else{
        incompletedTodoListElem.appendChild(listElement)
    }
   
})
