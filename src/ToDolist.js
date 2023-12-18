import React from 'react'
import ListItem from './ListItem'


const Todolist = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul>
        {todos.map((todo) => (
          <ListItem
          todo = {todo}
          key = {todo.id}
          // key must be unique so must be passed - if ignored warning pops in console
          handleDelete = {handleDelete}
          handleToggle = {handleToggle}
          />
        ))}
      </ul>
  )
}

export default Todolist