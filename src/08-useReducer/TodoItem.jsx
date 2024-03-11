import React from 'react'

export const TodoItem = ({todo, handleDelete, handleToggle}) => {
  return (
    <li key={todo.id} className={`list-group-item d-flex justify-content-between ${todo.done ? 'complete-todo' : ''}`}>
      <span className='align-self-center' onClick={()=>handleToggle(todo)}>{todo.description}</span>
      <button className='btn btn-danger' onClick={()=>handleDelete(todo)}>Borrar</button>
    </li>
  )
}
