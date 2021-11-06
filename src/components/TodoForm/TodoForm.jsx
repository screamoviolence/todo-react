import React, { useState } from 'react'
import './todoForm.css';


function TodoForm(props) {

    const [input, setInput] = useState('')

    const changeHandler = e => {
        setInput(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.round(Math.random() * 100000),
            text: input,
        })
        setInput('')
    }



    return (props.edit) ? (
        <form className='todo-form' onSubmit={submitHandler}>
            <input className='todo-input' placeholder='Update your todo' name='text' type='text' onChange={changeHandler} value={input} />
            <button className='todo-button'>Update todo</button >
        </form>
    ) : (
        <form className='todo-form' onSubmit={submitHandler}>
            <input className='todo-input' placeholder='Add your todo' name='text' type='text' onChange={changeHandler} value={input} />
            <button className='todo-button'>Add todo</button >
        </form>
    )
}

export default TodoForm
