const todos = [{
    name: 'todo 1',
    description : 'description 1',
    completed: true
},{
    name: 'todo 2',
    description : 'description 2',
    completed: false
},{
    name: 'todo 3',
    description : 'description 3',
    completed: true
}]

console.log(`You have ${todos.length} todo's`)
console.log(JSON.stringify(todos[0]))
console.log(JSON.stringify(todos[todos.length-2]))

// removing 3rd todo
todos.splice(2,1)
console.log(todos)
// adding todo to end
todos.push({
    name: 'todo 6',
    description : 'description 6',
    completed: true
})
console.log(todos)

// removing first todo
todos.shift();
console.log(todos)

console.log('\n')

todos.forEach(function(todo , index){
    console.log(`${index+1}. ${JSON.stringify(todo)}`)
})

console.log('\n')

for(let index=todos.length-1 ; index >= 0 ; index --){
    console.log(`${index+1}. ${JSON.stringify(todos[index])}`)
}

console.log('\n')

const filterTodosByCompletion = function(todos, completion){
    return todos.filter((todo) => todo.completed === completion)
}

console.log(JSON.stringify(filterTodosByCompletion(todos,true)))
console.log(JSON.stringify(filterTodosByCompletion(todos,false)))

console.log('\n')


// false completion comes first
const sortByCompletion = (todos) => {
    return todos.sort((a,b) => {
        return (!a.completed) ? -1 : 1
    })
}

console.log('\n')

console.log(JSON.stringify(sortByCompletion(todos)))

let romoveTodoByName = function(todos , name){
    let todoIndex =  todos.findIndex(function(todo){
        return todo.name.toLowerCase() === name.toLowerCase()
    })
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
    return todos
}

console.log(JSON.stringify(romoveTodoByName(todos, 'Todo 2')))
