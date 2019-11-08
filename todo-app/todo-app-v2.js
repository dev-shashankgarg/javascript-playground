console.log('TODO Application v2.0 Initialized !!')

let todos = []

init()

document.querySelector('#createTodoForm').addEventListener('submit' , (event) => {
    event.preventDefault()

    todos.push({
        id: uuidv4(),
        name:event.target.elements.name.value,
        completed: false
    })

    saveTodo(todos)

    event.target.elements.name.value = ''
    init()
})

document.querySelector('#hideCompletedCheckbox').addEventListener('change' , (event) => {
    renderTodosWithHidden('allTodoTable',todos, event.target.checked)
})

document.querySelector('#removeAllTodoForm').addEventListener('submit' , (event) => {
    event.preventDefault()
    localStorage.removeItem('todos')
    init()
})

document.querySelector('#markTodoCompletedForm').addEventListener('submit', (event) => {
    event.preventDefault()

    const todosFound = findTodoByName(todos , event.target.elements.name.value)
    todosFound.forEach(todo => todo.completed = true)

    saveTodo(todos)

    event.target.elements.name.value = ''
    init()
})

document.querySelector('#removeTodoForm').addEventListener('submit', (event) => {
    event.preventDefault()

    const todosFound = findTodoByName(todos , event.target.elements.name.value)
    todosFound.forEach(todo =>{
        removeTodoByName(todos,todo.name)
    })

    saveTodo(todos)

    event.target.elements.name.value = ''
    init()
})

document.querySelector('#searchQuery').addEventListener('input' , (event) =>{
    if(event.target.value === ''){
        renderTodos('searchTodoTable',[])
    }else{
        const todoFiltered = todos.filter(todo => todo.name.includes(event.target.value))
        renderTodos('searchTodoTable',todoFiltered)
    }
})