import React, { useState } from 'react'
import Header from './components/Header'
import "./App.css"
import Main from './components/Main'

const App = () => {
  const[todos,setTodos] = useState([]);
  const[filter,setFilter] = useState("all");
  
  

  const addTodo = (name,desc) => {

    setTodos([...todos,{id:Date.now(), todoName:name,todoDesc:desc,status:"NotCompleted"}]);
  }
  console.log(todos);

  const updateTodoStatus = (todoStatus,todoId) =>{

    setTodos(todos.map((todo) => (todo.id === todoId ? {...todo,status:todoStatus} : todo)))
  }

  const filteredTodos = todos.filter((todo) => {
    if(filter === "all") return true;
    return todo.status === filter;
  })

  const deleteTodo =(todoId) => {
    const newTodos = todos.filter((todo) => (todo.id !== todoId))
    setTodos(newTodos)

  }

  const editTodo = (newName,newDesc,todoId) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? {...todo,todoName:newName,todoDesc:newDesc}:todo)))

  }

  
  
  return (
    <>
      <Header addTodo={addTodo}/>
      <Main todos={filteredTodos}
            updateTodoStatus={updateTodoStatus}
            setFilter={setFilter}
            filter={filter}
            deleteTodo={deleteTodo}
            editTodo={editTodo} />
    </>
  )
}

export default App
