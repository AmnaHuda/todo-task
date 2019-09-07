const TodoList = (state = [], action) => {
    switch(action.type) {
        case 'TODO_FETCHED': {
            return action.todolist
        }
        case 'TO_DO_ADDED': {
            let newState = Object.assign([], state)
            newState.splice(0,0,action.todo)
            return newState
        }
       
        case 'TOGGLE_TODO': {
            let newState = Object.assign([], state)
            newState[action.index].isDone = !newState[action.index].isDone
            return newState
        }
        default: 
            return state
    }
        
}

export default TodoList