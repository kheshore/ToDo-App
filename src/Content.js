import React from "react";
import ToDolist from "./ToDolist"

const Content = ({todos, handleToggle ,handleDelete}) => {
  
  return (
    <main>
        {(todos.length) ? 
        <ToDolist
        todos = {todos}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
        />
      : <p>Your To-Do list is Empty</p>
      }
    </main>
  );
};

export default Content;
