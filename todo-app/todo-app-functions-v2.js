const fetchTodos = () => {
    const todoJson = localStorage.getItem('todos')
    let  todos = []
    if(todoJson !== null){
        todos = JSON.parse(todoJson)
    }
    return todos
}

const saveTodo = (todos) => {
    const todoJson = JSON.stringify(todos)
    localStorage.setItem('todos' , todoJson)
}


const createTableHeader = (tableId) =>{

    const tHeadElem = document.createElement('thead')
    tHeadElem.className = `${tableId}Class`
    
    const h1 = document.createElement('th')
    h1.textContent = "Index"
    tHeadElem.appendChild(h1)
    const h2 = document.createElement('th')
    h2.textContent = "Name"
    tHeadElem.appendChild(h2)
    const h3 = document.createElement('th')
    h3.textContent = "Status"
    tHeadElem.appendChild(h3)
    
    return tHeadElem
}
    
    const createTableRow = (tableId ,index, todo) => {
        const tRow = document.createElement('tr')
        tRow.className = `${tableId}Class`
    
        const col1 = document.createElement('td')
        col1.textContent = index
        tRow.appendChild(col1)
        const col2 = document.createElement('td')
        col2.textContent = todo.name
        tRow.appendChild(col2)
        const col3 = document.createElement('td')
        tRow.appendChild(col3)
        if(todo.completed){
            col3.textContent = "Completed"
        }else{
            col3.textContent = "Not Completed"
        }
        return tRow
    }
    
    const findTodoByName = (todos , name) => {
        return todos.filter(todo => todo.name === name)
    }
    
    const removeTodoByName = (todos , name) => {
        todos.forEach((todo,index) => {
            if(todo.name === name){
                todos.splice(index,1)
            }
        })
    }
    
    const renderTodos = (tableId , todos) => {
    
        document.querySelectorAll(`.${tableId}Class`).forEach(elem => elem.remove())
        if(todos !==null && todos.length >0){
            document.querySelector(`#${tableId}`).appendChild(createTableHeader(tableId))
            todos.forEach((todo,index) => {
                document.querySelector(`#${tableId}`).appendChild(createTableRow(tableId,index+1,todo))
            })
        }   
    }
    
    const renderTodosWithHidden = (tableId , todos , hideCompleted) => {
    if(hideCompleted){
        renderTodos(tableId , todos.filter(todo => !todo.completed))
    }else{
    renderTodos(tableId , todos)
    }
    }
    
    const init = () => {
        todos = fetchTodos()
        renderTodosWithHidden('allTodoTable',todos, document.querySelector('#hideCompletedCheckbox').checked)
    }