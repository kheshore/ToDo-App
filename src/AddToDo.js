import React from 'react'
import { RiAddCircleFill } from "react-icons/ri";

// AddToDo component to add new todo
// newTodo and setNewTodo are props from App passed as a parameter of object
// handleSubmit is a function from App
// RiAddCircleFill is an icon
const AddToDo = ({newTodo, setNewTodo, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}> 
        <input 
        type="text"
        placeholder='Add Item'
        required
        autoFocus
        // this is a controlled component
        // controlled component is when the value is controlled by the user
        // newTodo is value and setNewTodo is a function with value as parameter
        // here value is set to {newTodo}
        // onChange is an event where the input value is set when the user types
        // e.target.value is the value of the input field
        value={newTodo}
        onChange = {(e)=> setNewTodo(e.target.value)}
        />
        <button
        type='submit'
        >
        <RiAddCircleFill />
        </button>
    </form>
  )
}

export default AddToDo