import React from 'react'
import './todo.css';
import { TiEdit } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";



const Todo = ({ todos, completeTodo, deleteTodo, setEdit }) => {

    const todosMap = () => (
        todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <TiEdit className='edit-icon' onClick={() => setEdit({ id: todo.id, value: todo.text })} />
                    <TiDeleteOutline className='delete-icon' onClick={() => deleteTodo(todo.id)} />
                </div>
            </div>
        )).reverse()
    )

    return (
        <div>{todosMap()}</div>
    )
}

export default Todo
