import React from 'react'

export default function Todocard(props) {
  const { children,  handleDelete, index , handleEdit } = props;
  return (
    <div>
      <li className='todoItem' >
        {children}
        <div className='actionContanier'></div>
        <button onClick={() => {
          handleEdit(index)
        }}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDelete(index)
        }}>
          <i className="fa-solid fa-trash"></i>  
          </button>
      </li>
    </div>
   
  )
}
