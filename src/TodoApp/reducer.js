import { ADD_TODO, REMOVE_TODO, SET_VALUE, UPDATE_TODO } from "./constans"

export const initState = {
    value: '',
    todos: []
}
function reducer(state, action) {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                value: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Math.floor(Math.random() * 63),
                        title: action.payload
                    }]
            }

        case REMOVE_TODO:
            const newTodoRemove = [...state.todos]
            newTodoRemove.splice(action.index, 1)
            return {
                ...state,
                todos: newTodoRemove
            }

        case UPDATE_TODO:
            const newTodoUpdate = [...state.todos]
            newTodoUpdate[action.index].title = action.payload
            return {
                ...state,
                todos: newTodoUpdate
            }
        default:
            throw new Error('Invalid action!')
    }
}
export default reducer