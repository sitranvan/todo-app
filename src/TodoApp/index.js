import React, { useReducer, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import reducer, { initState } from './reducer'
import './TodoApp.css'
import { addTodo, removeTodo, setValue, updateTodo } from './actions'

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { value, todos } = state
    const inputRef = useRef()
    const updateRef = useRef(-1)
    const handleAdd = e => {
        e.preventDefault()
        value !== '' && dispatch(addTodo(value))
        dispatch(setValue(''))
        inputRef.current.focus()
        updateRef.current = -1
    }


    const handleRemove = index => {
        dispatch(removeTodo(index))
        updateRef.current = -1
    }

    const handleEdit = (todo, index) => {
        updateRef.current = index
        dispatch(setValue(todo.title))
        inputRef.current.focus()
    }
    const handleUpdate = e => {
        e.preventDefault()
        value !== '' && dispatch(updateTodo(value, updateRef.current))
        dispatch(setValue(''))
        inputRef.current.focus()
        updateRef.current = -1
    }
    return (
        <form className="form">
            <h5>What's the Plan for Today</h5>
            <div className="todo-form">
                <input
                    placeholder='Enter add todo...'
                    ref={inputRef}
                    value={value}
                    onChange={e => dispatch(setValue(e.target.value))}
                />
                {
                    updateRef.current !== -1 ?
                        <button className='add-todo' onClick={handleUpdate} >Update todo</button> :
                        <button className='add-todo' onClick={handleAdd} >Add todo</button>
                }
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="todo-item">
                        <span>{todo.title}</span>
                        <FontAwesomeIcon icon={faCircleXmark} className="remove-todo" onClick={() => handleRemove(index)} />
                        <FontAwesomeIcon icon={faPenToSquare} className="edit-todo" onClick={() => handleEdit(todo, index)} />
                    </li>
                ))}
            </ul>
        </form>

    )
}

export default TodoApp