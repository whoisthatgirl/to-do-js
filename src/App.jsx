import React, { useState, useEffect } from "react";

import Todolist from "./compnents/Todolist";
import TodoInput from "./compnents/Todinput";
import Todocard from "./compnents/Todocard";


function App() {

    const [todos, setTodoes] = React.useState([])
    const [todoValue, setTodoValue] = useState('')
    


    function persisDate(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        persisDate(newTodoList)
        setTodoes(newTodoList)

    }
    function handleDelete(index){
        const newTodoList = todos.filter((todo, todoIndex) => { 
            return todoIndex !==index
        })
        persisDate(newTodoList)
        setTodoes(newTodoList)
    } 

    function handleEdit(index){
       const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDelete(index)

    }

 
    useEffect(() => {
        if (!localStorage) {
        return
        }
        let localTodos = localStorage.getItem('todos')
        if (!localTodos) {
           return
        }
        localTodos = JSON.parse(localTodos).todos;
        setTodoes(localTodos)
},[])

    return (
        <>
            <TodoInput todoValue= {todoValue }  setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}  />
            <Todolist handleEdit={handleEdit} handleDelete={handleDelete} todos={todos} />
            

       
        </>
     )   


}


export default App;