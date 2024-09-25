import React from 'react'
import TodoInput from './Todinput'
import Todocard from './Todocard'

export default function Todolist(props) {
const {todos}= props

  
  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <Todocard {...props}
            key={todoIndex} index={todoIndex}>   
            <p>{todo}</p>
        </Todocard>
        )
      })}
    

    </div>
  )
}
