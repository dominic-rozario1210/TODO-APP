import React from 'react'
import TodoCard from './TodoCard'

const Main = ({ todos, updateTodoStatus, filter, setFilter, deleteTodo, editTodo }) => {
    return (
        <main>
            <div className='main-container'>
                <h2>My Todos</h2>
                <div className='status'>
                    <label htmlFor="" className='status-label'>Status:</label>
                    <select name="" id="" value={filter} className={`status-select ${filter}`}
                        onChange={(e) => (setFilter(e.target.value))}>
                        <option value="all">All</option>
                        <option value="Completed">Completed</option>
                        <option value="NotCompleted">Not Completed</option>
                    </select>
                </div>
            </div>
            {
                todos.length === 0 ?
                    <h1 className='welcome'>Welcome to Todo App</h1>
                    :
                    <div className='todo-container'>
                        {
                            todos.map((todo) => (
                                <TodoCard key={todo.id}
                                    todo={todo}
                                    updateTodoStatus={updateTodoStatus}
                                    deleteTodo={deleteTodo}
                                    editTodo={editTodo} />
                            ))
                        }
                    </div>
            }
        </main>
    )
}

export default Main
