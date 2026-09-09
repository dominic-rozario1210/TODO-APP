import React, { useState } from 'react'

const Header = ({addTodo}) => {

    const[todoName,setTodoName] = useState("");
    const[todoDesc,setTodoDesc] = useState("");

    const handleSubmit = () => {
        addTodo(todoName,todoDesc);
        setTodoDesc("");
        setTodoName("");
    }
    return (
        <>
            <div className='header-container'>
                <h1>My Todo</h1>
                <div className='input-form'>
                    <div className='input-group'>
                        <label htmlFor="">Task</label>
                        <input type="text"
                               value={todoName}
                               placeholder='Enter Task Name'
                               onChange={(e) => (setTodoName(e.target.value))}
                               />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Description</label>
                        <input type="text"
                               value={todoDesc}
                               placeholder='Enter Description'
                               onChange={(e) => (setTodoDesc(e.target.value))}
                                />
                    </div>
                    <button className='btn' onClick={handleSubmit }>Add Todo</button>
                </div>

            </div>
        </>
    )
}

export default Header
