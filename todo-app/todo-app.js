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

//------------------ create a todo start

document.querySelector('#createTodoFormId').addEventListener('submit' , (event) => {
    event.preventDefault()
    const todoName = event.target.elements.todoName.value
    persistTodo(todos , todoName)
    event.target.elements.todoName.value = ''
})

const persistTodo = (todos , todoName) => {
        todos.push({
            text: todoName,
            completed:false
        })
}

//------------------ create a todo end



//---------------------filtering data for search start

const deleteListElemIfAny = () =>{
    document.querySelectorAll('.searchClassList').forEach(elem => elem.remove())
}

const addToList = (list , todo) => {
    const listElement = document.createElement('li')
        listElement.className = 'searchClassList'
        const paragraph = document.createElement('p')
        const textNode = document.createElement('b')
        textNode.textContent = `${todo.text}`
        paragraph.appendChild(textNode)
        listElement.appendChild(paragraph)
        list.appendChild(listElement)
}

const renderTodo = (todos , query) => {
    todos.filter(todo => {
        return todo.text.toLowerCase().includes(query.toLowerCase())
    }).forEach(todo => {
        addToList(document.querySelector('#searchTodoListId') , todo)
    })
}

document.querySelector('#queryText').addEventListener('input', (event) => {
    deleteListElemIfAny()
    renderTodo(todos , event.target.value)
})

//---------------------filtering data for search end

const hideSummary = () =>{
    document.querySelectorAll('.summaryClassList').forEach(elem => elem.remove())
    document.querySelectorAll('.summaryClass').forEach(elem => elem.textContent = '')
}

document.querySelector('#summaryBttn').addEventListener('click',() => {

    hideSummary()
    document.querySelector('#summaryHideBttn').hidden=false

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
        listElement.className = 'summaryClassList'
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
})

document.querySelector('#summaryHideBttn').addEventListener('click',(e) => {
    hideSummary()
    document.querySelector('#summaryHideBttn').hidden=true
})