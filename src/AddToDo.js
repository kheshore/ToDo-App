import React from 'react'
import { RiAddCircleFill } from "react-icons/ri";

const AddToDo = (newItem, setNewItem) => {
  return (
    <form>
        <input 
        type="text"
        placeholder='Add Item'
        id='addItem'
        required
        autoFocus
        value={newItem}
        onChange = {(e)=> setNewItem(e.target.value)}
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