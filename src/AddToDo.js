import React from 'react'
import { RiAddCircleFill } from "react-icons/ri";


const AddToDo = () => {
  return (
    <form>
        <input 
        type="text"
        placeholder='Add Item'
        id='addItem'
        required
        autoFocus
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