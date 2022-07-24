import { ADD_TODO, REMOVE_TODO, SET_VALUE, UPDATE_TODO } from "./constans"

export const setValue = payload => {
    return {
        type: SET_VALUE,
        payload
    }
}
export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const removeTodo = index => {
    return {
        type: REMOVE_TODO,
        index
    }
}
export const updateTodo = (payload, index) => {
    return {
        type: UPDATE_TODO,
        payload,
        index
    }
}
