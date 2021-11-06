import React, { useState } from 'react'
import './todoList.css';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';


function TodoList() {
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodo = [todo, ...todos]
        setTodos(newTodo)
        console.log(todo, ...todos)
    }

    const updateTodo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }


        setTodos(prev => prev.map(todo => todo.id === id ? newValue : todo))
    }

    const deleteTodo = (id) => {
        const removeTodo = [...todos].filter(todo => todo.id !== id)
        setTodos(removeTodo)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
                console.log(todo.isComplete)
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    return (
        <div>
            <h1>What planes do you have Today?</h1>
            <div> {
                (edit.id)
                    ? (<TodoForm edit={edit} onSubmit={submitUpdate} />)
                    : (<TodoForm onSubmit={addTodo} />)
            }
                <Todo
                    edit={edit}
                    setEdit={setEdit}
                    todos={todos}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo} />
            </div>
        </div>
    )
}

export default TodoList