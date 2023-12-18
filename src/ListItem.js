import React from 'react'
import { MdDeleteForever } from "react-icons/md";


const ListItem = ({todo, handleDelete, handleToggle}) => {
    //no need to receive the key property
    return (
    <li 
    className="item" 
    // key={todo.id} no need to declare the key again - declared in parent-Child: TodoList
    >
        <div>
            <input
              type="checkbox"
              onChange={() => handleToggle(todo.id)}
              checked={todo.checked}
            />
            <label
            style = {(todo.checked) ? {textDecoration: 'line-through'}:null}
            onDoubleClick={() => handleToggle(todo.id)}
            >{todo.todo}
            </label>
            </div>
            <MdDeleteForever
            role="button"
            onClick={() => handleDelete(todo.id)}
            tabIndex = "0"
            // used to move the list item per Tab key
            aria-label = {`Delete ${todo.todo}`}
            // used for read aloud  - screen readers
            />
          </li>
  )
}

export default ListItem