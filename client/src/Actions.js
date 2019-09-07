import axios from 'axios'
const request = 'http://localhost:5000/todo-item'
const updatetodo = 'http://localhost:5000/update-todo-item'
const deletetodo = 'http://localhost:5000/delete-todo-item'



export const AddTodoItem = ( title, description ) => {
    return(dispatch) => {
        axios.post(request, { title, description }).
        then((res) => {
            dispatch({
                type: 'TO_DO_ADDED',
                todo: {
                    ...res.data.doc
                }
            })
        }).catch((err) => {

        })
    }
}

/*export const DeleteTodoItem = ( _id ) => {
    return(dispatch) => {
        axios.post(request, { _id }).
        then((res) => {
            dispatch({
                type: 'TO_DO_DELETED',
                todo: {
                    ...res.data.doc
                }
            })
        }).catch((err) => {

        })
    }
}*/

export const GetTodosFromServer = ( ) => {
    return(dispatch) => {
        axios.get(request).then((res) => {
            console.log('Res:', res)
            dispatch({ type: 'TODO_FETCHED', todolist: res.data.todos })
        }).catch((err) => {
            console.log("Error:", err)
        })
    }
}

export const ToggleTodo = (index, id, checked) => {
    return(dispatch) => {
        axios.post(updatetodo, { id, checked }).then((res) => {
            dispatch({
                type: 'TOGGLE_TODO',
                index
            })
        }).catch((err) => {
            console.log("Error:", err)
        })
        
    }
}